#!/usr/bin/env node

const program = require("commander")
// const inquirer = require("inquirer")
// const path = require("path")

const release = require("./cmds/release")
const clean = require("./cmds/clean")
const link = require("./cmds/link")
const eslint = require("./cmds/eslint")
const figma = require("./cmds/figma") // TODO: Refactor so that only one figma function is imported and handles all options
const i18n = require("./cmds/i18n")
const create = require("./cmds/create")
const s3 = require("./cmds/s3")
const { version } = require("../package.json")

// TODO: Each command should return a function called command with takes the program and adds its command?

program
  .version(version)
  .description("Command line tool for Stacc X")
  .option(
    "-c, --configPath [path]>",
    "Path for finding config file",
    "bento-config.js"
  )
  .option("-d, --debug", "Run without running commands")

const list = val => {
  return val.split(",")
}

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
  .command("release")
  .alias("r")
  .description("Helps you release bento")
  .action(({ parent: { debug = false } }) => {
    release(debug)
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

program.parse(process.argv)
