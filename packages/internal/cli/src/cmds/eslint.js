const { executeAsync, setupSpinner, runCommand } = require("./__helpers")

const packages = [
  "@staccx/eslint-config@8.39.3",
  "babel-eslint@9.0.0",
  "eslint@5.6.0",
  "eslint-config-prettier@2.9.0",
  "eslint-config-standard@11.0.0",
  "eslint-config-standard-react@6.0.0",
  "eslint-plugin-import@2.9.0",
  "eslint-plugin-node@6.0.1",
  "eslint-plugin-prettier@2.6.0",
  "eslint-plugin-promise@3.6.0",
  "eslint-plugin-react@7.7.0",
  "eslint-plugin-standard@3.0.1"
]

const install = async ({ pwd = null }) => {
  const cwd = pwd || process.cwd()

  const spinner = setupSpinner()

  spinner.info("Installing eslint packages")

  await runCommand({
    spinner,
    succeedText: `Installed eslint packages`,
    startText: `Installing eslint packages`,
    failText: `Failed to install eslint packages`,
    command: async () =>
      executeAsync("yarn", ["add", "-D", ...packages], {
        cwd
      })
  })
  spinner.succeed("You now have eslint")
}

module.exports = install
