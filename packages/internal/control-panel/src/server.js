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
  const packages = JSON.parse(exec("lerna ls --json").stdout)
  socket.emit("init", { packages })

  socket.on("run script", data => {
    const { pkg, script } = data
    console.log("run script ", data)

    const child = exec(`lerna run --scope ${pkg} ${script}`, { async: true })

    child.stdout.on("data", data => {
      socket.emit("log", { log: data, pkg })
    })

    child.on("exit", () => {
      console.log("here")
      socket.emit("build ended", pkg)
    })
  })
})
