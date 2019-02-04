const ora = require("ora")
const checkWorkingTree = require("@lerna/check-working-tree")
const username = require("username")
const { executeAsync } = require("./__helpers")
const { postMessage } = require("../utils/slack")
const { fetch, status } = require("../utils/git")

let updated = []
const onData = data => {
  updated = JSON.parse(data)
}

async function release(debug) {
  const spinner = ora({
    text: "Setup",
    spinner: "monkey"
  })

  const checkGit = async (msg = "Checking git for changes") => {
    try {
      spinner.start(msg)
      if (!debug) {
        await checkWorkingTree({ cwd: process.cwd() })
        await fetch(process.cwd())
        const { behind, ahead } = await status(process.cwd())
        if (behind > 0) {
          spinner.fail(
            `You are behind by ${behind} and ahead by ${ahead}. Please pull`
          )
          process.exit(1)
        }
      }
      spinner.succeed("No changes. 🎉")
    } catch (e) {
      spinner.fail("You have local changes")
      process.exit(1)
    }
  }

  await checkGit()
  let packageNames = []
  let text = ""
  try {
    spinner.start("Finding changed packages")
    await executeAsync("lerna", ["changed", "--json"], {}, onData)
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

  await checkGit("Checking git for changes after linting")

  /**
   * Release the beast!
   */

  try {
    spinner.start("Releasing packages. Please wait")
    if (!debug) {
      spinner.info("Versioning!")
      await executeAsync(
        "lerna",
        ["version", "--conventional-commits", "--yes"],
        {},
        console.log
      )
      spinner.info("Publishing!")
      await executeAsync(
        "lerna",
        ["publish", "from-package", "--no-verify-access", "--yes"],
        {},
        console.log
      )
      spinner.succeed("Published!")
      await executeAsync(
        "lerna",
        ["ls", `--scope`, scope, "--json"],
        {},
        onData
      )
      text = updated.map(pkg => `${pkg.name}: ${pkg.version}`).join("\n")
    }
    spinner.succeed("Packages released!")
  } catch (e) {
    spinner.fail("Something went wrong during releasing", e)
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

module.exports = release
