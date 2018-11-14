const spawn = require("child_process").spawn
const ora = require("ora")
const checkWorkingTree = require("@lerna/check-working-tree")

// TODO: Git state
const ab2str = function(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}

const executeAsync = function(cmd, params, onLog, onErr) {
  return new Promise(function(resolve, reject) {
    execute(cmd, params, onLog, onErr, resolve, reject)
  })
}

const execute = function(
  cmd,
  params,
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

  const child = spawn(cmd, params, {
    shell: true,
    env,
    stdio: [null, null, null, "ipc"],
    detached: true
  })

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

let updated = []
const onData = data => {
  updated = JSON.parse(data)
}

async function release() {
  const spinner = ora({
    text: "Setup",
    spinner: "monkey"
  })
  try {
    spinner.start("Checking git for changes")
    await checkWorkingTree({ cwd: process.cwd() })
    spinner.succeed("No changes. Good person")
  } catch (e) {
    spinner.fail("You have local changes")
    process.exit(1)
  }
  try {
    spinner.start("Finding changed packages")
    await executeAsync("lerna", ["changed", "--json"], onData)
    spinner.succeed(`Found ${updated.length} packages`)
  } catch (ex) {
    console.error(ex)
    // reject(ex)
    throw ex
  }

  const scope = updated.map(u => u.name).join(" --scope ")

  try {
    spinner.start("Validating build for all changed packages")
    await executeAsync("lerna", ["exec", `--scope`, scope, `yarn prepare`])
    spinner.succeed(`Building was successful`)
  } catch (ex) {
    spinner.fail("Prepare failed")
    process.exit(1)
  }

  try {
    spinner.start("Running tests for all changed packages")
    await executeAsync("lerna", [
      "exec",
      `--scope`,
      scope,
      `yarn prepublishOnly`
    ])
    spinner.succeed("Tests performed successfully")
  } catch (e) {
    spinner.fail("Tests failed")
    process.exit(1)
  }

  // execute("lerna", ["updated", "--json"], console.log)
}

release()
