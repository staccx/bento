const username = require("username")
const { executeAsync, setupSpinner, runCommand, wait } = require("./__helpers")
const { postMessage, getGiphy } = require("../utils/slack")
const { fetch, status } = require("../utils/git")
const path = require("path")

async function startStorybook({ action, cmd }) {
  const bentoRoot = path.resolve(__dirname, "../../../../../")

  const spinner = setupSpinner("Storybook")

  switch (action) {
    case "start":
      start(bentoRoot, spinner)
      break

    case "deploy":
      deploy(bentoRoot, spinner)
      break
    default:
      console.log("Not supported")
      break
  }
}

async function start(root, spinner) {
  await runCommand({
    spinner,
    debug: false,
    failText: "Could not start Storybook",
    startText: `Starting storybook`,
    succeedText: "Storybook started",
    command: async () => {
      executeAsync("yarn", ["storybook"], { cwd: root })
      await wait(14000)
    }
  })
}

async function deploy(root, spinner) {
  const storybookPath = path.resolve(root, ".storybook")

  await runCommand({
    spinner,
    debug: false,
    failText: "Could not build Storybook",
    startText: `Building storybook`,
    succeedText: "Storybook builded",
    command: async () =>
      executeAsync("yarn", ["build-storybook"], { cwd: root })
  })

  await runCommand({
    spinner,
    debug: false,
    failText: "Could not deploy Storybook",
    startText: `Deploying storybook`,
    succeedText: "Storybook deployed",
    command: async () =>
      executeAsync("now", ["--target", "production"], { cwd: storybookPath })
  })

  const giphy = await getGiphy(`storybook`)
  const name = await username()
  await postMessage({
    text: `@channel ${name} is releasing new storybook. `,
    attachments: [giphy]
  })

  await postMessage({
    text: "New storybook published at https://bento.stac.cx"
  })
}

module.exports = {
  startStorybook
}
