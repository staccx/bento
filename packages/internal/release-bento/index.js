const spawn = require("child_process").spawn
const ora = require("ora")
const checkWorkingTree = require("@lerna/check-working-tree")
const username = require("username")
const program = require("commander")
const { postMessage } = require("../mr-x")

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

program
  .option("-d, --debug", "Run without running commands")
  .parse(process.argv)

async function release(debug) {
  const spinner = ora({
    text: "Setup",
    spinner: "monkey"
  })
  try {
    spinner.start("Checking git for changes")
    if (!debug) {
      await checkWorkingTree({ cwd: process.cwd() })
    }
    spinner.succeed("No changes. Good person")
  } catch (e) {
    spinner.fail("You have local changes")
    process.exit(1)
  }
  let packageNames = []
  let text = ""
  try {
    spinner.start("Finding changed packages")
    await executeAsync("lerna", ["changed", "--json"], onData)
    packageNames = updated.map(m => m.name.replace("@staccx/", ""))

    const chosen = packageNames.slice(0, 4)
    text = `${chosen.join(", ")}${
      packageNames.length > chosen.length
        ? ` and ${packageNames.length - chosen.length} others`
        : ""
    }`

    spinner.succeed(`Packages with changes: ${text}`)
  } catch (ex) {
    console.error(ex)
    // reject(ex)
    throw ex
  }

  const scope = updated.map(u => u.name).join(" --scope ")

  try {
    spinner.start("Validating build for all changed packages")
    if (!debug) {
      await executeAsync("lerna", ["exec", `--scope`, scope, `yarn prepare`])
    }
    spinner.succeed(`Building was successful`)
  } catch (ex) {
    spinner.fail("Prepare failed")
    process.exit(1)
  }

  try {
    spinner.start("Running tests for all changed packages")
    if (!debug) {
      await executeAsync("lerna", [
        "exec",
        `--scope`,
        scope,
        `yarn prepublishOnly`
      ])
    }
    spinner.succeed("Tests performed successfully")
  } catch (e) {
    spinner.fail("Tests failed")
    process.exit(1)
  }

  /**
   * Post message to slack
   */
  try {
    spinner.start("Alerting team on Slack")
    const name = await username()
    if (!debug) {
      await postMessage(
        `@channel ${name} is releasing ${text}. Please do not push changes to git`
      )
    }
    spinner.succeed("Team alerted about the impending release")
  } catch (e) {
    spinner.fail("Error whilst sending message to Slack")
    process.exit(1)
  }

  /**
   * Release the beast!
   */

  try {
    spinner.start("Releasing packages. Please wait")
    if (!debug) {
      await executeAsync("lerna", [
        "publish",
        "--no-verify-access",
        "--no-verify-registry",
        "--conventional-commits",
        "--yes"
      ])

      await executeAsync("lerna", ["ls", `--scope`, scope, "--json"], onData)
      text = updated.map(pkg => `${pkg.name}: ${pkg.version}`).join("\n")
    }
    spinner.succeed("Packages released!")
  } catch (e) {
    spinner.fail("Something went wrong during releasing")
    const name = await username()
    await postMessage(`@channel @${name}'s release failed. Let them know`)
    process.exit(1)
  }

  /**
   * Post message to slack
   */
  try {
    spinner.start("Alerting team on Slack")
    const name = await username()
    if (!debug) {
      await postMessage(
        `@channel ${name} has released\n \`\`\`${text}\`\`\`\nYou can find release notes here: https://bitbucket.org/stacc-flow/bento/src/master/CHANGELOG.md`
      )
    }
    spinner.succeed("Team alerted about the awesome")
  } catch (e) {
    spinner.fail("Error whilst sending message to Slack")
    process.exit(1)
  }

  spinner.succeed("Release done. Have a good day!")
}

release(program.debug)
