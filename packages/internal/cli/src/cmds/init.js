const { setupSpinner, config } = require("./__helpers")
const inquirer = require("inquirer")
const { BENTO_ROOT_KEY } = require("../constants")

const init = async ({ path }) => {
  const spinner = setupSpinner("Welcome")

  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Want do you want to do?",
      choices: [
        { name: "Clone bento", value: 0 },
        { name: "Set Bento root", value: 1 }
      ],
      default: 1
    }
  ])

  switch (action) {
    case 0:
      spinner.fail("Not supported yet")
      break
    case 1:
      spinner.info(
        `Setting Bento root. Assuming current working directory: ${process.cwd()}`
      )
      const { current } = await inquirer.prompt([
        {
          type: "confirm",
          name: "current",
          message: "Confirm please"
        }
      ])

      if (current) {
        config.set(BENTO_ROOT_KEY, process.cwd())
      }
      break
    default:
      console.log("No action selected")
      break
  }
}

module.exports = init
