#!/usr/bin/env node

const program = require("commander")
// const inquirer = require("inquirer")
// const path = require("path")

const getTranslations = require("./utils/getTranslations")
const convertTranslations = require("./utils/convertTranslations")
const saveToJson = require("./utils/saveToJson")
const walk = require("./utils/walk")
const release = require("./cmds/release")
const clean = require("./cmds/clean")
const { version } = require("../package.json")

program.version(version).description("Command line tool for Stacc X")

const list = val => {
  return val.split(",")
}

program
  .command("i18n")
  .option("-s, --save", "Download and save to file")
  .option("-w, --walk", "Traverse files and find missing")
  .option("-p, --project <projectId>", "Sanity project id")
  .option("-d, --dataset <dataset>", "Dataset for project to compare against")
  .option("-f, --filename <file>", "Filename of saved file")
  .option("--pattern <pattern>", "Glob pattern for finding components")
  .option(
    "-l, --languages <languages>",
    "List of languages. Comma-separated",
    list
  )
  .description("i18n operations")
  .action(cmd => {
    if (!cmd.project) {
      console.warn("No project provided")
      process.exit(1)
    }
    if (!cmd.dataset) {
      console.warn("No dataset provided")
      process.exit(1)
    }
    try {
      getTranslations(cmd.project, cmd.dataset)
        .then(convertTranslations)
        .then(async texts => {
          if (cmd.save) {
            await saveToJson(texts, cmd.filename).then(textsSaved =>
              console.log(`Saved ${Object.keys(textsSaved).length} keys`)
            )
          }

          if (cmd.walk) {
            const { keys } = await walk({ texts, languages: cmd.languages })
            console.log("Result:", keys)
            await saveToJson(keys, cmd.filename)
          }
        })
        .catch(console.error)
    } catch (e) {
      throw e
    }
  })

program
  .command("release")
  .alias("r")
  .description("Helps you release bento")
  .option("-d, --debug", "Run without running commands")
  .action(({ debug = false }) => {
    release(debug)
  })

program
  .command("clean")
  .alias("c")
  .description("Removes all dependencies in monorepo and reinstalls them")
  .option("-d, --debug", "Run without running commands")
  .action(({ debug = false }) => {
    clean(debug)
  })

program.parse(process.argv)
