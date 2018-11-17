#!/usr/bin/env node

const program = require("commander")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs-extra")
const sanityClient = require("@sanity/client")
const convertTranslations = require("./utils/convertTranslations")
const saveToJson = require("./utils/saveToJson")

program.version("0.0.1").description("Command line tool for Stacc X")

program
  .command(`create <name>`)
  .alias("c")
  .description("Create a styleguide")
  .action(name => {
    inquirer
      .prompt({
        type: "confirm",
        name: "createModule",
        message: "Are you sure?"
      })
      .then(response => {
        // console.log({ name })
        console.log("Dirname", __dirname)
        console.log(path.dirname(__filename))
      })
  })

program
  .command(`module <name>`)
  .alias("m")
  .description("Create a empty module")
  .action(name => {
    inquirer
      .prompt({
        type: "confirm",
        name: "createModule",
        message: "Are you sure?"
      })
      .then(response => {
        const { createModule } = response
        console.log(response)
        if (createModule) {
          // console.log({ name })

          console.log("Copying from", path.dirname("../"))
          console.log("Dirname", __dirname)
          console.log(path.dirname(__filename))
        }
      })
  })

program
  .command("i18n")
  .option("-s, --sync")
  .option("-p, --project <projectId>", "Sanity project id")
  .option("-d, --dataset <dataset>")
  .option("-f, --filename <file>")
  .description("i18n operations")
  .action(cmd => {
    if (cmd.sync) {
      if (!cmd.project) {
        console.warn("No project provided")
        process.exit(1)
      }
      if (!cmd.dataset) {
        console.warn("No dataset provided")
        process.exit(1)
      }
      try {
        const client = sanityClient({
          projectId: cmd.project,
          dataset: cmd.dataset,
          useCdn: true
        })

        const query = `*[_type == "i18n"] {"id": _id, key, value}`
        console.log("Fetching texts", query)
        client
          .fetch(query)
          .then(convertTranslations)
          .then(texts => {
            return saveToJson(texts, cmd.filename)
          })
          .then(textsSaved =>
            console.log(`Saved ${Object.keys(textsSaved).length} keys`)
          )
          .catch(console.error)
      } catch (e) {
        throw e
      }
    }
  })

program.parse(process.argv)
