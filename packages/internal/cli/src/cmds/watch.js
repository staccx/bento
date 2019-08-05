const path = require("path")
const { spawn } = require("child_process")
const { getBentoRoot } = require("./__helpers")
const { executeAsync, setupSpinner, runCommand } = require("./__helpers")

let packages = []
const onData = data => {
  packages = JSON.parse(data)
}

const spinner = setupSpinner()

const watchInstance = ({ name, location }, folder = "src/") => {
  const proc = spawn(
    "nodemon",
    [
      "--watch",
      path.resolve(location, folder),
      "--exec",
      "yarn build && yalc push"
    ],
    {
      stdio: ["pipe", "pipe", "pipe", "ipc"],
      cwd: location
    }
  )

  proc.on("message", function(event) {
    if (event.type === "start") {
      spinner.info(`${name} has started`)
    } else if (event.type === "crash") {
      spinner.info(`${name} has crashed`)
    }
  })

  proc.on("error", function(e) {
    spinner.fail(`${name} has error ${e}`)
  })

  proc.on("exit", function() {
    spinner.succeed(`${name} has quit`)
  })

  proc.once("SIGINT", function() {
    console.log("Shutting down")
  })
}

const watch = async function({ target, once = false }) {
  const fail = function() {
    process.exit(1)
  }

  const bentoRoot = getBentoRoot()
  const cwd = process.cwd()
  let pkg = null

  if (target && target.length) {
    if (!Array.isArray(target)) {
      target = [target]
    }

    target = target.map(t => {
      return t.indexOf("@staccx/") === -1 ? `@staccx/${t}` : t
    })
  }

  // Get packages
  await executeAsync("lerna", ["ls", "--json"], { cwd: bentoRoot }, onData)

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

  if (once) {
    // await runCommand({
    //   onFail: console.log,
    //   failText: "Failed to build",
    //   startText: "Building...",
    //   succeedText: "Built and pushed",
    //   spinner,
    //   debug: false,
    //   command: async () => {
    //     await executeAsync("yarn", ["build"])
    //     await executeAsync("yalc", ["push"], { cwd })
    //   }
    // })
  } else {
    target.forEach(async t => {
      spinner.info(`Trying to find ${t} in packages`)
      const pt = packages.find(p => p.name === t)

      if (pt) {
        spinner.succeed(`Found ${t}`)
        watchInstance(pt)
      }
    })

    // nodemon('--watch src/ --exec "yarn build && yalc push"')
  }

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

  process.on("SIGINT", () => {
    spinner.succeed(
      "Closing down. Remember to release your changes and update the dependencies"
    )
  })
}

module.exports = watch
