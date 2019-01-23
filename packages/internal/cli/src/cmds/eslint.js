const { executeAsync, setupSpinner, runCommand } = require("./__helpers")

const packages = {
  "@staccx/eslint": "8.39.3",
  "babel-eslint": ">=8.2.2",
  eslint: ">=5.0.1",
  "eslint-config-prettier": ">=2.9.0",
  "eslint-config-standard": ">=11.0.0",
  "eslint-config-standard-react": ">=6.0.0",
  "eslint-plugin-import": ">=2.9.0",
  "eslint-plugin-node": ">=6.0.1",
  "eslint-plugin-prettier": ">=2.6.0",
  "eslint-plugin-promise": ">=3.6.0",
  "eslint-plugin-react": ">=7.7.0",
  "eslint-plugin-standard": ">=3.0.1"
}

const install = async () => {
  const cwd = process.cwd()

  const spinner = setupSpinner()

  spinner.info("Installing eslint packages")

  for (const pkg of Object.keys(packages)) {
    const pkgVersion = `${pkg}@${packages[pkg]}`

    await runCommand({
      spinner,
      succeedText: `installed ${pkgVersion}`,
      startText: `Installing ${pkgVersion}`,
      failText: `Failed to install ${pkgVersion}`,
      command: async () =>
        executeAsync(
          "yarn",
          ["add", "-D", pkgVersion],
          {
            cwd
          },
          console.log
        )
    })
  }
}

module.exports = install
