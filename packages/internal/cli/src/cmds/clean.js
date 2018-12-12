const ora = require("ora")
const path = require("path")
const { executeAsync, runCommand } = require("./__helpers")

async function clean(debug) {
  const spinner = ora({
    text: "Clean",
    spinner: "monkey"
  })

  const bentoRoot = path.resolve("../../../")

  /**
   * Remove node_modules
   */
  await runCommand({
    onFail: console.log,
    failText: "Something went wrong whilst cleaning node_modules",
    startText: "Deleting node_modules",
    succeedText: "Deleted node_modules",
    spinner,
    debug,
    command: async () =>
      executeAsync("rm", ["-rf", "node_modules"], {
        cwd: bentoRoot
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
    debug,
    command: async () =>
      executeAsync("rm", ["yarn.lock"], {
        cwd: bentoRoot
      })
  })

  /**
   * Lerna clea
   */
  await runCommand({
    onFail: console.log,
    failText: "Could not clean",
    startText: "Lerna clean",
    succeedText: "Cleaned local node_modules",
    spinner,
    debug,
    command: async () =>
      executeAsync("lerna", ["clean", "--yes"], {
        cwd: bentoRoot
      })
  })

  /**
   * Bootstrap
   */
  await runCommand({
    onFail: console.log,
    failText: "Could not bootrap",
    startText: "Bootstrapping",
    succeedText: "Bootstrap done",
    spinner,
    debug,
    command: async () =>
      executeAsync("lerna", ["bootstrap"], {
        cwd: bentoRoot
      })
  })

  /**
   * Build
   */
  await runCommand({
    onFail: console.log,
    failText: "Something failed while building. NOTE: no need to clean again. Just find what failed whilst building and rebuild",
    startText: "Building",
    succeedText: "Build done",
    spinner,
    debug,
    command: async () =>
      executeAsync("lerna", ["exec", `prepare`], {
        cwd: bentoRoot
      })
  })
}

module.exports = clean
