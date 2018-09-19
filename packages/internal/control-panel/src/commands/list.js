function appendOutput(msg) {
  console.log(msg)
}

function setStatus(msg) {
  console.log(msg)
}

function backgroundProcess() {
  const process = require("child_process") // The power of Node.JS

  console.log(process)
  // showOS();
  var cmd = "test.sh"
  console.log("cmd:", cmd)

  var child = process.spawn(cmd)

  child.on("error", function(err) {
    appendOutput("stderr: <" + err + ">")
  })

  child.stdout.on("data", function(data) {
    appendOutput(data)
  })

  child.stderr.on("data", function(data) {
    appendOutput("stderr: <" + data + ">")
  })

  child.on("close", function(code) {
    if (code == 0) setStatus("child process complete.")
    else setStatus("child process exited with code " + code)

    // getCommandOutput().style.background = "DarkGray"
  })
}

backgroundProcess()
