const spawn = require("child_process").spawn
const cosmiconfig = require("cosmiconfig")
const ora = require("ora")
const validatePackageName = require("validate-npm-package-name")
const sanityClient = require("@sanity/client")
const Conf = require("conf")
const fs = require("fs-extra")
const os = require("os")
const { BENTO_ROOT_KEY } = require("../constants")

let client = null
const config = new Conf({
  fileExtension: "bentorc",
  configName: "",
  cwd: os.homedir()
})

const getSanityClient = (projectId, dataset, token = null, useCdn = true) => {
  if (client) {
    return client
  }
  client = sanityClient({
    projectId,
    dataset,
    token,
    useCdn
  })

  return client
}

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

  if (opts.pipe) {
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
  }
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
  let result = null
  try {
    spinner.start(startText)
    if (!debug) {
      result = await command()
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
  return result
}

const setupSpinner = function(text = "Starting", spinner = "monkey") {
  return ora({
    text,
    spinner
  })
}

const traverse = function(o, fn) {
  for (const i in o) {
    fn.apply(this, [i, o[i], o])
    if (o[i] !== null && typeof o[i] === "object") {
      traverse(o[i], fn)
    }
  }
}

const spinner = setupSpinner()

const readRC = async name => {
  if (!name) {
    spinner.info("No name provided")
    return {}
  }
  const explorer = cosmiconfig(name)
  spinner.info("Checking for config file")

  try {
    const config = await explorer.search()
    if (config) {
      spinner.succeed("Config file found")
      return config
    } else {
      spinner.info("No config file found")
    }
  } catch (e) {
    throw e
  }

  return {}
}

const createRC = async (p, bentoRoot, name) => {
  const content = {
    bentoRoot
  }

  await fs.writeJSON(p, content)

  return readRC(name)
}

const getBentoRoot = () => {
  const root = config.get(BENTO_ROOT_KEY)

  return root || null
}

const validateNpmName = name => {
  const { validForNewPackages } = validatePackageName(name)

  return validForNewPackages
}

module.exports = {
  executeAsync,
  runCommand,
  getBentoRoot,
  setupSpinner,
  traverse,
  readRC,
  createRC,
  getSanityClient,
  validateNpmName,
  wait,
  config
}
