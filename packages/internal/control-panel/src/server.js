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

  socket.on("buildAll", () => {
    const child = exec("lerna run build", { async: true })
    child.stdout.on("data", function(data) {
      socket.emit("write log", data)
    })
  })

  socket.on("build", pkg => {
    console.log("building", pkg)
    const child = exec(`lerna run --scope ${pkg} build`, { async: true })

    child.stdout.on("data", data => {
      socket.emit("write log", data)
    })

    child.on("exit", () => {
      console.log("here")
      socket.emit("build ended", pkg)
    })
  })
})
