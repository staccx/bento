const spawn = require("child_process").spawn
const ora = require("ora")

const wait = function(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const ab2str = function(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}

const executeAsync = function(cmd, params, options, onLog, onErr) {
  return new Promise(function(resolve, reject) {
    execute(cmd, params, options, onLog, onErr, resolve, reject)
  })
}

const execute = function(
  cmd,
  params,
  options,
  onStdOut = function() {
    return null
  },
  onStdErr = function() {
    return null
  },
  onExit = function() {
    return null
  },
  onError = function() {
    return null
  }
) {
  const env = Object.assign({}, process.env, {
    FORCE_COLOR: 1,
    NPM_CONFIG_COLOR: "always"
  })

  const opts = Object.assign(
    {},
    env,
    {
      shell: true,
      stdio: [null, null, null, "ipc"],
      detached: true
    },
    options
  )

  const child = spawn(cmd, params, opts)

  child.stdout.on("data", function(data) {
    onStdOut(ab2str(data))
  })
  child.stderr.on("data", function(data) {
    onStdErr(ab2str(data))
  })
  child.on("close", onExit)
  child.on("error", onError)

  return child
}

const runCommand = async function({
  spinner,
  startText,
  succeedText,
  failText,
  onFail,
  command,
  debug = false,
  bail = true
}) {
  try {
    spinner.start(startText)
    if (!debug) {
      await command()
    } else {
      await wait()
    }
    spinner.succeed(succeedText)
  } catch (e) {
    spinner.fail(failText)
    if (onFail) {
      onFail(e)
    }
    if (bail) {
      process.exit(1)
    }
  }
}

const setupSpinner = function(text = "Starting", spinner = "monkey") {
  return ora({
    text,
    spinner
  })
}

module.exports = {
  executeAsync,
  runCommand,
  setupSpinner
}
