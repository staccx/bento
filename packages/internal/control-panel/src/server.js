const express = require("express")
const app = express()
const router = express.Router
const server = require("http").createServer(app)
const socket = require("socket.io")
const io = socket(server)
const spawn = require("child_process").spawn

const api = router()

const ab2str = buf => {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
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
    stdio: [null, null, null, "ipc"]
  })

  child.stdout.on("data", data => onStdOut(ab2str(data)))
  child.stderr.on("data", data => onStdErr(ab2str(data)))
  child.on("close", onExit)
  child.on("error", onError)
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

  execute("lerna", ["ls", "--json", "--all"], onData, () => null, () => null)

  socket.on("exec raw", data => {
    // Just fire it
    // exec(data)

    const split = data.split(" ")

    const cmd = split[0]
    const params = split.splice(1)

    execute(cmd, params)
  })

  socket.on("run exec", data => {
    const { pkg, script } = data

    execute("lerna", ["exec", `--scope ${pkg}`, script], data =>
      emitLog(data, pkg))
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
})
