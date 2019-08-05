const path = require("path")
const inquirer = require("inquirer")
const eslint = require("./eslint")
const saveToJson = require("../utils/saveToJson")
const {
  executeAsync,
  runCommand,
  setupSpinner,
  validateNpmName,
  getBentoRoot
} = require("./__helpers")

let themes = []
const additionalPackages = [
  {
    name: "styled-components",
    label: "styled-components",
    checked: true
  },
  {
    name: "@staccx/base",
    label: "base",
    checked: true
  }
]
const onLerna = data => {
  themes = JSON.parse(data)
    .filter(p => p.name.includes("-theme"))
    .map(pkg => ({
      name: pkg.name,
      label: pkg.name,
      checked: false
    }))
}

let spinner = setupSpinner()

const create = async ({ type, name }) => {
  spinner.info("Bento create")
  switch (type) {
    case "app":
      await app({ name })
      break
    default:
      spinner.fail(`No support yet for ${type}`)
      break
  }
}

const app = async ({ name, debug = false }) => {
  spinner.info("Checking name")

  const valid = validateNpmName(name)

  if (!valid) {
    spinner.fail(`Not a valid npm name`)
    process.exit(1)
  }

  spinner.succeed(`${name} is valid`)

  spinner.info(`Creating react-app (CRA) with name ${name}`)
  const cwd = process.cwd()

  await runCommand({
    spinner,
    debug,
    failText: "Could not create-react-app",
    startText: `Running npx create-react-app ${name}`,
    succeedText: "React app created",
    command: async () =>
      executeAsync(
        "npx",
        ["create-react-app", name, "--ignore-engines"],
        { cwd },
        console.log,
        console.log
      )
  })

  console.log("Bento root", getBentoRoot())

  await runCommand({
    spinner,
    failText: "Could fetch packages",
    startText: `Getting packages to install`,
    succeedText: "Packages fetched",
    command: async () =>
      executeAsync(
        "lerna",
        ["list", "--json"],
        { cwd: getBentoRoot() },
        onLerna
      )
  })

  const p = path.resolve(cwd, name)

  console.log("path", p)
  await runCommand({
    spinner,
    debug,
    failText: "Could not install must-have dependencies",
    startText: "Installing must-have dependencies",
    succeedText: "Installed must-have dependencies",
    command: async () =>
      executeAsync("yarn", ["add", ...additionalPackages.map(a => a.name)], {
        cwd: p
      })
  })

  const { thms } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "thms",
      message: "Which packages do they need?",
      choices: themes
    }
  ])

  await runCommand({
    spinner,
    debug,
    failText: "Could not install themes",
    startText: `installing themes into ${name}`,
    succeedText: "Themes installed",
    command: async () => executeAsync("yarn", ["add", ...thms], { cwd: p })
  })

  if (!debug) await eslint({ pwd: p })

  spinner.info("Creating files")

  await runCommand({
    spinner,
    debug,
    failText: "Could not create eslint file",
    startText: `Creating eslint file`,
    succeedText: ".eslintrc created",
    command: async () =>
      saveToJson(
        {
          extends: "@staccx"
        },
        path.resolve(p, ".eslintrc")
      )
  })

  await runCommand({
    spinner,
    debug,
    failText: "Could not create prettier file",
    startText: `Creating prettier file`,
    succeedText: ".prettierrc created",
    command: async () =>
      saveToJson(
        {
          semi: false
        },
        path.resolve(p, ".prettierrc")
      )
  })

  spinner.succeed("Successfully installed a new app with X stuff")
}

module.exports = create
