const io = require("socket.io-client")
const electron = window.require("electron")

const socket = io("/")

const packages = []

socket.on("open styleguide", ({ port, pid }) => {
  console.log("Styleguide is running on port", port)
  setTimeout(() => {
    // const w = window.open()

    const { BrowserWindow } = electron.remote

    const win = new BrowserWindow({ width: 800, height: 800 })
    win.loadURL(`http://localhost:${port}`)

    win.on("close", () => {
      console.log("window closed")
      socket.emit("exec raw", `kill -- -${pid}`)
    })
    // const current = electron.remote.getCurrentWindow()
    //
    // current.loadURL(`http://localhost:${port}`)
  }, 1000) // delay so that serve can spin up
})

electron.ipcRenderer.on("serve styleguide", () => {
  openStyleguide()
})

const openStyleguide = () => socket.emit("serve styleguide")

const getPackages = cb => {
  socket.on("init", cb)
}

module.exports = socket
module.exports.getPackages = getPackages
