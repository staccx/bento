const { spawn } = require("child_process")
const exec = spawn("exec")

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => {
    callback(stdout)
  })
}

module.exports = execute
