const { SYSTEM_NAME } = require("./contants")
const express = require("express")
const app = express()
const router = express.Router
const server = require("http").createServer(app)
const socket = require("socket.io")
const io = socket(server)
const spawn = require("child_process").spawn
const getPort = require("get-port")
const path = require("path")
const ora = require("ora")

const api = router()

const ab2str = buf => {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}

const executeAsync = (cmd, params, onLog) => {
  return new Promise((resolve, reject) => {
    execute(cmd, params, onLog, onLog, resolve, reject)
  })
}

const execute = (
  cmd,
  params,
  onStdOut = () => null,
  onStdErr = () => null,
  onExit = () => null,
  onError = () => null
) => {
  const env = {
    ...process.env,
    FORCE_COLOR: 1,
    NPM_CONFIG_COLOR: "always"
  }
  const child = spawn(cmd, params, {
    shell: true,
    env,
    stdio: [null, null, null, "ipc"],
    detached: true
  })

  child.stdout.on("data", data => onStdOut(ab2str(data)))
  child.stderr.on("data", data => onStdErr(ab2str(data)))
  child.on("close", onExit)
  child.on("error", onError)

  return child
}

app.use("/api", api)
server.listen(6660, () => console.log("Server running on 6660"))

io.on("connection", socket => {
  console.log("connected")
  const onData = data => {
    const allPackages = JSON.parse(data)
    const packages = allPackages.map(pkg => {
      const pkgFile = `${pkg.location}/package.json`
      const f = require(pkgFile)

      const depKeys = Object.keys(f.dependencies || {})
      const dependencies = depKeys.reduce((acc, curr) => [...acc, curr], [])
      return {
        ...pkg,
        scripts: f.scripts ? Object.keys(f.scripts) : [],
        dependencies
      }
    })

    socket.emit("init", { packages })
  }

  const emitLog = (log, pkg) => socket.emit("log", { log, pkg })
  const emitEnd = pkg => socket.emit("build ended", pkg)

  execute("lerna", ["ls", "--json", "--all"], onData, () => null, () => null)

  socket.on("exec raw", data => {
    const { pkg, script } = data
    console.log("executing", data)
    const split = script.split(" ")

    const cmd = split[0]
    const params = split.splice(1)

    // TODO: Improve this
    const log = msg => emitLog(msg, pkg)
    const end = msg => socket.emit("build ended", pkg)
    execute(cmd, params, log, log, end, end)
  })

  socket.on("run exec", data => {
    const { pkg, script } = data

    console.log("here?", pkg, data)

    const log = msg => emitLog(msg, pkg)
    const end = msg => socket.emit("build ended", pkg)
    execute("lerna", ["exec", `--scope ${pkg}`, script], log, log, end, end)
    // exec(`lerna exec --scope ${pkg} ${script}`)
  })

  socket.on("run script", data => {
    const { pkg, script } = data
    console.log("run script ", data)

    execute(
      "lerna",
      ["exec", `--scope`, `${pkg}`, `yarn ${script}`],
      data => emitLog(data, pkg),
      data => emitLog(data, pkg),
      data => socket.emit("build ended", pkg),
      data => socket.emit("build ended", pkg)
    )
  })

  socket.on("serve site", async data => {
    const { pkg } = data
    const port = await getPort({ port: 3000 })

    console.log("Serving app on port ", port)

    // TODO: Emit error
    const { pid } = execute(
      "lerna",
      ["exec", `--scope`, pkg, `serve -- -s build -l ${port} &`],
      log => emitLog(log, pkg),
      log => emitLog(log, pkg),
      d => emitEnd(pkg),
      d => emitEnd(pkg)
    )

    socket.emit("open site", { pid, port })
  })

  socket.on("reset project", async () => {
    const rootBento = path.resolve("../../../")
    console.log(rootBento)

    const cwd = process.cwd()

    const oraReset = new ora({ text: "Resetting project" })

    const oraNod = new ora({
      text: "Deleting node_modules"
    })
    const oraLock = new ora({ text: "Deleting lock file" })
    const oraClean = new ora({
      text: "Cleaning package node_modules"
    })
    const oraBootstrap = new ora({
      text: "Bootstrapping project"
    })

    process.stderr.on("data", log => emitLog(log, SYSTEM_NAME))

    process.chdir(rootBento)
    oraReset.start()
    try {
      oraNod.start()
      await executeAsync("rm", ["-rf", "node_modules"], log =>
        emitLog(log,
      SYSTEM_NAME
    ))

      oraNod.succeed()
      oraLock.start()

      await executeAsync("rm", ["yarn.lock"], log =>
        emitLog(log,
      SYSTEM_NAME
    ))

      oraLock.succeed()
      oraClean.start()
      await executeAsync("lerna", ["clean", "--yes"], log =>
        emitLog(log,
      SYSTEM_NAME
    ))

      oraClean.succeed()
      oraBootstrap.start()
      await executeAsync("lerna", ["bootstrap"], log =>
        emitLog(log,
      SYSTEM_NAME
    ))

      oraBootstrap.succeed()
    } catch (error) {
      console.error("Oops", error)
      oraReset.fail(error)
      return
    }
    oraReset.succeed("Project successfully reset")

    console.log("Reset done")

    process.chdir(cwd)
  })
})
