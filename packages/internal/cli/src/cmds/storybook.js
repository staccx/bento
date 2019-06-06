const username = require("username")
// const storybook = require("@storybook/react/standalone")
const {
  executeAsync,
  setupSpinner,
  runCommand,
  config
} = require("./__helpers")
const { postMessage, getGiphy } = require("../utils/slack")
const { latestLog } = require("../utils/git")
const { BENTO_ROOT_KEY } = require("../constants")
const path = require("path")
const opn = require("opn")

async function startStorybook({ action, cmd }) {
  const bentoRoot = config.get(BENTO_ROOT_KEY)

  if (!bentoRoot) {
    throw new Error("No bento root is set!")
  }

  const spinner = setupSpinner("Storybook")

  switch (action) {
    case "start":
      return start(bentoRoot, spinner)
    case "deploy":
      return deploy(bentoRoot, spinner)
    case "open":
      opn(decodeURI("https://bento.stac.cx"))
      break
    default:
      console.log(action, "not supported")
      break
  }

  return null
}

async function start(root, spinner) {
  executeAsync("yarn", ["storybook"], { cwd: root, pipe: true })
  spinner.info("Starting storybook")
  // process.env.NODE_ENV = "dev"
  // storybook({
  //   mode: "dev",
  //   port: 9009,
  //   configDir: "./.storybook",
  //   quiet: true
  // })
}

async function deploy(root, spinner) {
  const storybookPath = path.resolve(root, ".storybook")

  spinner.info("Building and deploying storybook")
  // process.env.NODE_ENV = "production"

  await runCommand({
    spinner,
    debug: false,
    failText: "Could not build Storybook",
    startText: `Building storybook`,
    succeedText: "Storybook builded",
    command: async () =>
      executeAsync("yarn", ["build-storybook"], { cwd: root, pipe: true })
  })
  // await storybook({
  //   mode: "static",
  //   configDir: storybookPath,
  //   outputDir: path.resolve(storybookPath, "dist"),
  //   quiet: true
  // })

  spinner.info("Storybook built")

  const {
    latest: { message }
  } = await latestLog(root)

  const giphy = await getGiphy(message)
  const name = await username()
  await postMessage({
    text: `@channel ${name} is releasing new storybook. Latest log: ${message}`,
    attachments: [giphy]
  })

  await runCommand({
    spinner,
    debug: false,
    failText: "Could not deploy Storybook",
    startText: `Deploying storybook`,
    succeedText: "Storybook deployed",
    command: async () =>
      executeAsync("now", ["--target", "production"], {
        cwd: storybookPath,
        pipe: true
      })
  })
  // TODO: Make tooling for employees to add link

  await postMessage({
    text: `@channel ${name} has released new storybook`,
    attachments: [
      {
        fallback: "Required plain-text summary of the attachment.",
        color: "#D44235",
        pretext: message,
        author_name: name,
        author_link: "http://flickr.com/bobby/",
        author_icon: "http://flickr.com/icons/bobby.jpg",
        title: "Bento Storybook",
        title_link: "https://bento.stac.cx",
        footer: "Bento CLI",
        footer_icon: "https://stacc.com/favicon-96x96.png",
        fields: [
          {
            type: "mrkdwn",
            text: "*Type:*\nBento Storybook release"
          },
          {
            type: "mrkdwn",
            text: `*When:*\n${new Date().toISOString()}`
          },
          {
            type: "mrkdwn",
            text: `*Reason:*\n${message}`
          }
        ]
      },
      {
        type: "section"
      }
    ]
  })
}

module.exports = {
  startStorybook
}
