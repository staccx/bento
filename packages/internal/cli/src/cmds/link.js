const path = require("path")
const rollup = require("rollup")
const generateConfig = require("@staccx/rollup-config")

const { executeAsync, setupSpinner, runCommand } = require("./__helpers")

const link = async function({ input, watch }) {
  const fail = function() {
    process.exit(1)
  }
  const cwd = process.cwd()
  const spinner = setupSpinner()
  let pkg = null
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
