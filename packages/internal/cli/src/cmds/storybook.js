const username = require("username")
const { executeAsync, setupSpinner, runCommand, wait } = require("./__helpers")
const { postMessage, getGiphy } = require("../utils/slack")
const { latestLog } = require("../utils/git")
const path = require("path")
const opn = require("opn")

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

    case "open":
      opn(decodeURI("https://bento.stac.cx"))
      break
    default:
      console.log(action, "not supported")
      break
  }
}

async function start(root, spinner) {
  executeAsync("yarn", ["storybook"], { cwd: root, pipe: true })
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
      executeAsync("yarn", ["build-storybook"], { cwd: root, pipe: true })
  })

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
      executeAsync("now", ["--target", "production"], { cwd: storybookPath, pipe: true })
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
