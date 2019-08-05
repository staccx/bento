#!/usr/bin/env node

const program = require("commander")
// const inquirer = require("inquirer")
const init = require("./cmds/init")
const release = require("./cmds/release")
const clean = require("./cmds/clean")
const link = require("./cmds/link")
const watch = require("./cmds/watch")
const eslint = require("./cmds/eslint")
const figma = require("./cmds/figma") // TODO: Refactor so that only one figma function is imported and handles all options
const i18n = require("./cmds/i18n")
const create = require("./cmds/create")
const s3 = require("./cmds/s3")
const { startStorybook } = require("./cmds/storybook")
const { config, readRC, getBentoRoot } = require("./cmds/__helpers")
const { version } = require("../package.json")
const { BENTO_ROOT_KEY } = require("./constants")
// TODO: Each command should return a function called command with takes the program and adds its command?

const validateBentoRoot = async value => {
  const root = config.get(BENTO_ROOT_KEY)
  console.log(config.path, root)

  if (value) {
    config.set(BENTO_ROOT_KEY, value)
  }

  return config.get(BENTO_ROOT_KEY)
}

const bentoRoot = getBentoRoot()

if (!bentoRoot && process.argv[2] !== "init") {
  console.log("Bento root not set")
  console.log("Please run `bento init`")
  process.exit(1)
}

program
  .version(version)
  .description("Command line tool for Stacc X")
  .option("--path <path>", "Path for bento root", validateBentoRoot)
  .option("-c, --configPath [path]>", "Path for finding config file", "bento")
  .option("-d, --debug", "Run without running commands")

const list = val => {
  return val.split(",")
}

program.command("config").action(async () => {
  const config = await readRC("bento")
  console.log("Config", config)
})

program
  .command("i18n")
  .option("-s, --save", "Download and save to file")
  .option("-w, --walk", "Traverse files and find missing")
  .option("-p, --project <projectId>", "Sanity project id")
  .option("-da, --dataset <dataset>", "Dataset for project to compare against")
  .option("-f, --filename <file>", "Filename of saved file")
  .option("-u, --upload", "Upload missing values to Sanity")
  .option("--yes", "Confirm all yeses")
  .option("--pattern <pattern>", "Glob pattern for finding components")
  .option(
    "-l, --languages <languages>",
    "List of languages. Comma-separated",
    list,
    ["nb"]
  )
  .description("i18n operations")
  .action(i18n)

program
  .command("release [bumpiness]")
  .alias("r")
  .description("Helps you release bento")
  .option("-s, --skip", "skips version testing")
  .option("-t, --tag <tag>", "Npm dist tag")
  .action((bumpiness, { parent: { debug = false }, skip, tag }) => {
    release({ bumpiness, debug, skip, tag })
  })

program
  .command("clean")
  .alias("c")
  .description("Removes all dependencies in monorepo and reinstalls them")
  .action(({ parent: { debug = false } }) => {
    clean(debug)
  })

program
  .command("link [target...]")
  .alias("l")
  .description("Leverage building and linking with yalc. All in one package")
  .option("-i, --input <path>", "Entry point for builder")
  .option("-w, --watch", "Keep the watcher alive")
  .option("-r, --reset")
  .action((target, { input, watch, reset }) => {
    link({ input, watch, target, reset })
  })

program
  .command("figma")
  .alias("f")
  .option("-i, --includePageData")
  .description("Connect to figma files and do stuff")
  .action(figma)

program
  .command("eslint")
  .alias("e")
  .description("Install Stacc X eslint setup")
  .action(eslint)

program
  .command("create <type> <name>")
  .description("Create stuff")
  .action((type, name) => {
    create({ type, name })
  })

program
  .command("s3 <action>")
  .option("-f, --file <file>")
  .option("--directory <directory>")
  .option("-n, --name <name>")
  .option("-b, --bucket <bucket>")
  .option("--ignorePattern <ignorePattern>")
  .description("Interact with Amazon S3")
  .action(({ action }, cmd) => {
    s3(cmd)
  })

program.command("storybook <action>").action((action, cmd) => {
  startStorybook({ action, cmd })
})

program.command("init").action(props => {
  init(props)
})

program
  .command("watch [target...]")
  .option("--single", "Run only once?")
  .action((target, { single }) => {
    watch({ target, once: single })
  })

program.parse(process.argv)
