const path = require("path")
const rollup = require("rollup")
const generateConfig = require("@staccx/rollup-config")

const { executeAsync, setupSpinner, runCommand } = require("./__helpers")

const link = async function({ input = "src/export.js", watch, target, reset }) {
  const fail = function() {
    process.exit(1)
  }

  console.log(reset)
  const cwd = process.cwd()
  const spinner = setupSpinner()
  let pkg = null

  if (reset) {
    spinner.info("Lets reset")

    await runCommand({
      spinner,
      onFail: console.error,
      startText: "Unlinking",
      succeedText: "Unlink done",
      failText: "Could not unlink",
      command: async () => executeAsync("yalc", ["remove", "--all"], { cwd })
    })

    /**
     * Remove node_modules
     */
    await runCommand({
      onFail: console.log,
      failText: "Something went wrong whilst cleaning node_modules",
      startText: "Deleting node_modules",
      succeedText: "Deleted node_modules",
      spinner,
      command: async () =>
        executeAsync("rm", ["-rf", "node_modules"], {
          cwd
        })
    })

    /**
     * Lock file
     */
    await runCommand({
      onFail: console.log,
      failText: "Could not delete lock file",
      startText: "Lock file",
      succeedText: "Deleted lock file",
      spinner,
      command: async () =>
        executeAsync("rm", ["yarn.lock"], {
          cwd
        })
    })

    /**
     * yarn install
     */
    await runCommand({
      onFail: console.log,
      failText: "Could not fetch packages",
      startText: "Getting fresh packages",
      succeedText: "Done",
      spinner,
      command: async () =>
        executeAsync("yarn", ["install", "--silent"], {
          cwd
        })
    })

    await runCommand({
      onFail: console.log,
      failText: "Could not upgrade",
      startText: "Upgrading",
      succeedText: "Upgraded",
      spinner,
      command: async () =>
        executeAsync("yarn", ["upgrade", "-S", "@staccx", "--latest"], {
          cwd
        })
    })

    return
  }

  if (target && target.length) {
    if (!Array.isArray(target)) {
      target = [target]
    }

    target = target.map(t => {
      return t.indexOf("@staccx/") === -1 ? `@staccx/${t}` : t
    })

    await runCommand({
      onFail: console.log,
      failText: `Failed to link ${target.join(", ")}`,
      startText: `Linking to ${target.join(", ")}`,
      succeedText: `Linked to ${target.join(", ")}`,
      spinner,
      debug: false,
      command: async () => {
        executeAsync("yalc", ["link", target.join(" ")], { cwd })
      }
    })
    return
  }
  try {
    pkg = require(path.resolve(cwd, "package.json"))
  } catch (e) {
    spinner.fail("No package file here. Please navigate to root of bundle")
    fail()
  }

  if (!pkg) {
    spinner.fail("No package file here. Please navigate to root of bundle")
    fail()
  }

  if (!input) {
    spinner.fail("input not provided. try again")
    fail()
  }

  if (watch) {
    const watcher = rollup.watch(generateConfig(pkg, input))
    watcher.on("event", async event => {
      switch (event.code) {
        case "END":
          await runCommand({
            onFail: console.log,
            failText: "Failed to build",
            startText: "Building...",
            succeedText: "Built and pushed",
            spinner,
            debug: false,
            command: async () => {
              executeAsync("yalc", ["push"], { cwd })
            }
          })
          break
        case "ERROR":
        case "FATAL":
          console.log(event.error)
          spinner.fail("Fatal error. Fix and restart")
          break
        default:
          break
      }
    })
  } else {
    await runCommand({
      onFail: console.log,
      failText: "Failed to build",
      startText: "Building...",
      succeedText: "Built and pushed",
      spinner,
      debug: false,
      command: async () => {
        await rollup.rollup(generateConfig(pkg, input))
        executeAsync("yalc", ["push"], { cwd })
      }
    })
  }
}

module.exports = link
