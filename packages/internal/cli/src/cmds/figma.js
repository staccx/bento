const express = require("express")
const router = express.Router
const opn = require("opn")
const axios = require("axios")
const inquirer = require("inquirer")
const { setupSpinner, traverse, readRC, config } = require("./__helpers")
const fs = require("fs-extra")

const clientId = "2ES42WtZhStuyjrwA0MEee"
const secret = "tvZfEyRuJ2N575L0tJJjA6sysCNwUL"
const callback = "http://localhost:5000/oauth/callback"

const FIGMA_ACCESS_TOKEN = "figma-access-token"
const FIGMA_REFRESH_TOKEN = "figma-refresh-token"
const FIGMA_EXPIRES = "figma-expires"
const FIGMA_PREVIOUS = "figma-previous"

const state = "generatesomething"
const createAuthUrl = () =>
  `https://www.figma.com/oauth?client_id=${clientId}&redirect_uri=${callback}&scope=file_read&state=${state}&response_type=code`

const createPostUrl = ({ code }) =>
  `https://www.figma.com/api/oauth/token?client_id=${clientId}&client_secret=${secret}&redirect_uri=${callback}&code=${code}&grant_type=authorization_code`

const createRefreshUrl = ({ refreshToken }) =>
  `POST https://www.figma.com/api/oauth/refresh?client_id=${clientId}&client_secret=${secret}&refresh_token=${refreshToken}`

const generateDate = seconds => {
  const today = new Date()
  today.setDate(today.getDate() + seconds / 86400)

  return today
}

const spinner = setupSpinner()

const verifyToken = () => {
  return new Promise((resolve, reject) => {
    const accessToken = config.get(FIGMA_ACCESS_TOKEN)
    const refreshToken = config.get(FIGMA_REFRESH_TOKEN)
    if (!accessToken && !refreshToken) {
      return reject(new Error("Please authenticate"))
    }

    const expires = config.get(FIGMA_EXPIRES)
    if (expires) {
      const date = new Date(expires)

      if (date < new Date()) {
        if (!refreshToken) {
          return reject(
            new Error("Could not find a refresh token. New auth needed")
          )
        }

        const refreshUrl = createRefreshUrl({ refreshToken })

        axios
          .post(refreshUrl)
          .then(result => result.data)
          .then(data => {
            const { access_token: accessToken, expires_in: expiresIn } = data

            config.set(FIGMA_ACCESS_TOKEN, accessToken)
            config.set(FIGMA_EXPIRES, generateDate(expiresIn))

            return resolve(accessToken)
          })
      } else {
        return resolve(accessToken)
      }
    }

    // This might be erronious
    return resolve(accessToken)
  })
}

const auth = () => {
  return new Promise((resolve, reject) => {
    const app = express()
    const server = require("http").createServer(app)

    server.listen(5000)

    const authRoutes = router()
    authRoutes.get("/oauth/callback", (req, res, next) => {
      const { query } = req
      const url = createPostUrl({
        code: query.code
      })

      axios
        .post(url)
        .then(result => result.data)
        .then(data => {
          const {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires_in: expiresIn
          } = data

          config.set(FIGMA_ACCESS_TOKEN, accessToken)
          config.set(FIGMA_REFRESH_TOKEN, refreshToken)
          config.set(FIGMA_EXPIRES, generateDate(expiresIn))

          return resolve()
        })
        .catch(reject)

      next()
    })

    app.use("/", authRoutes)

    const url = decodeURI(createAuthUrl())
    opn(url)
  })
}

const getKey = async configKey => {
  return new Promise(async (resolve, reject) => {
    if (configKey) {
      // Just return what was provided
      return resolve(configKey)
    }

    let key = null

    try {
      const previous = config.get(FIGMA_PREVIOUS, null)
      if (previous) {
        const { usePrev } = await inquirer.prompt({
          type: "confirm",
          name: "usePrev",
          message: `Found key from last time. Project: ${previous.name}`
        })
        if (usePrev) {
          key = previous.key
        }
      }

      if (!key) {
        const { inputKey } = await inquirer.prompt({
          type: "input",
          name: "inputKey",
          message: "Please input file key"
        })
        key = inputKey
      }
    } catch (e) {
      return reject(e)
    }

    return resolve(key)
  })
}

const getFile = key => {
  return axios
    .get(`https://api.figma.com/v1/files/${key}`)
    .then(result => result.data)
}

const defaultMapFrame = frame => {
  const { name } = frame

  return {
    meta: {
      name
    },
    name
  }
}

const figma = async ({ parent: { configPath }, includePageData }) => {
  // console.log(a, configPath, opts)
  const { figmaKey, mapFrame = defaultMapFrame } = await readRC(configPath)

  let key = await getKey(figmaKey)

  if (!key) {
    spinner.fail("No key provided")
    return
  }

  try {
    spinner.info("Checking authentication")
    const accessToken = await verifyToken()

    if (!accessToken) {
      spinner.info("No access token found. We need to verify you")
      try {
        const answers = await inquirer.prompt({
          type: "confirm",
          name: "authenticate",
          message: "Authenticate now?"
        })

        if (answers["authenitcate"]) {
          await auth()
        } else {
          spinner.fail("Failed to authenticate")
        }
      } catch (e) {
        spinner.fail(`Error: ${e.message.substring(0, 100)}`)
      }
    }

    if (accessToken) {
      spinner.succeed("Access token found and valid")

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`

      spinner.info(`Getting figma file`)
      const file = await getFile(key)

      if (file) {
        spinner.info("File found")
        const { document, name } = file
        const { children } = document
        config.set(FIGMA_PREVIOUS, { key, name })

        const question = {
          type: "list",
          name: "page",
          message: `Choose page to get data from`,
          choices: children.map(c => ({
            name: c.name,
            value: c
          }))
        }

        const { page } = await inquirer.prompt(question)

        const data = {
          name: page.name,
          key,
          initial: page.prototypeStartNodeID,
          ...(includePageData && { data: page }),
          states: page.children.reduce((frames, frame, index) => {
            const { id, type } = frame

            if (type !== "FRAME") {
              // Only frames will translate to states
              return frames
            }

            frames[id] = {
              ...mapFrame(frame),
              on: {}
            }

            traverse(frame, (key, value, parent) => {
              if (key === "transitionNodeID") {
                frames[id].on = {
                  ...frames[id].on,
                  [parent.name]: value
                }
              }
            })

            return frames
          }, {})
        }

        if (page) {
          const { filename } = await inquirer.prompt({
            type: "input",
            name: "filename",
            message: "Enter filename",
            default: `${page.name}.json`
          })

          await fs.writeJSON(filename, data)
        }
      }

      return null
    }
  } catch (e) {
    // spinner info
    spinner.fail(e.message)
  }
}

module.exports = figma
