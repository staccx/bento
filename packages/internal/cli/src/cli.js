#!/usr/bin/env node
const program = require("commander")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs-extra")

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
  .command("getContact <name>")
  .alias("r")
  .description("Update a styleguide")
  .action(name => console.log(name))

program.parse(process.argv)
