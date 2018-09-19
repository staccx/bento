const express = require("express")
const app = express()
const router = express.Router
const server = require("http").createServer(app)
const socket = require("socket.io")
const io = socket(server)
const shell = require("shelljs")
const exec = shell.exec

const api = router()

app.use("/api", api)
server.listen(6660, () => console.log("Server running on 6660"))

io.on("connection", socket => {
  console.log("connected")
  const allPackages = JSON.parse(exec("lerna ls --json --all").stdout)
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

  socket.on("exec raw", data => {
    // Just fire it
    exec(data)
  })

  socket.on("run exec", data => {
    const { pkg, script } = data

    exec(`lerna exec --scope ${pkg} ${script}`)
  })

  socket.on("run script", data => {
    const { pkg, script } = data
    console.log("run script ", data)

    const child = exec(`lerna run --scope ${pkg} ${script} --stream`, {
      async: true
    })

    child.stdout.on("data", data => {
      socket.emit("log", { log: data, pkg })
    })

    child.on("exit", data => {
      console.log("here", data)
      socket.emit("build ended", pkg)
    })
  })
})
