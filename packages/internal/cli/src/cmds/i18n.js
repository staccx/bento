const inquirer = require("inquirer")
const nanoid = require("nanoid")
const path = require("path")
const { Translate } = require("@google-cloud/translate")
const getTranslations = require("../utils/getTranslations")
const convertTranslations = require("../utils/convertTranslations")
const saveToJson = require("../utils/saveToJson")
const walkFunc = require("../utils/walk")
const {
  readConfig,
  runCommand,
  setupSpinner,
  getSanityClient
} = require("./__helpers")
const statuses = require("../utils/i18nStatuses")

const googleProjectId = "bento-230412"

const t = new Translate({
  projectId: googleProjectId,
  keyFile: path.resolve("bento-ce0dee83ada4.json"),
  key: "AIzaSyCuMeUlqN_3P4x3SzICBq73n5qgD2lMAgQ"
})

const dashToRegular = text =>
  (text.charAt(0).toUpperCase() + text.substr(1)).replace(
    /-([a-z])/g,
    g => ` ${g[1]}`
  )

const camelToRegular = text =>
  (text.charAt(0).toUpperCase() + text.substr(1))
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, str => {
      return str.toUpperCase()
    })
    .replace(" ", "") // noldus

const i18n = async ({
  project,
  dataset,
  filename,
  languages,
  walk,
  save,
  type,
  upload,
  token,
  yes,
  parent: { configPath, debug }
}) => {
  const { config } = await readConfig(configPath)

  const {
    sanityProjectId = project,
    sanityDataset = dataset,
    sanityDocType = type,
    sanityToken = token,
    translationReducer = convertTranslations
  } = config

  if (!sanityProjectId) {
    console.warn("No project provided")
    process.exit(1)
  }
  if (!sanityDataset) {
    console.warn("No dataset provided")
    process.exit(1)
  }

  const spinner = setupSpinner()
  const client = getSanityClient(
    sanityProjectId,
    sanityDataset,
    sanityToken,
    false
  )
  try {
    const translations = await runCommand({
      spinner,
      failText: "Could not get translations",
      startText: "Fetching translations",
      succeedText: "Translations fetched",
      debug,
      command: async () =>
        getTranslations({
          client,
          type: sanityDocType
        })
    })

    const texts = await runCommand({
      spinner,
      failText: "Could not convert translations",
      startText: "Converting translations",
      succeedText: "Translations converted",
      debug,
      onFail: e => console.error(e),
      command: () => translations.reduce(translationReducer)
    })

    if (save) {
      let keys = null
      if (walk) {
        const w = await runCommand({
          spinner,
          failText: "Could not walk through",
          startText: "Analysing component tree...",
          succeedText: "Analysis done.",
          debug,
          command: async () => walkFunc({ texts, languages: languages })
        })
        keys = w.keys.filter(c => c.status !== statuses.OK)

        if (upload) {
          const getLangData = (name, lang) => ({
            name: name,
            value: lang,
            checked: languages.indexOf(lang) !== -1
          })
          const { langs } = await inquirer.prompt([
            {
              type: "checkbox",
              name: "langs",
              message: "Which languages do you want to use",
              choices: [
                getLangData("Norsk", "nb"),
                getLangData("English", "en"),
                getLangData("Francois", "fr"),
                getLangData("Swedish", "sw")
              ],
              default: [...languages.map(l => ({ [l]: { checked: true } }))]
            }
          ])

          const { cont } = await inquirer.prompt([
            {
              type: "confirm",
              message: `There are ${
                keys.length
              } anomalies. Do you want to fix them?`,
              name: "cont"
            }
          ])

          if (cont) {
            // await inquirer.prompt(createUploadQuestion(node))
            for (let i = 0; i < keys.length; i++) {
              spinner.info(`Anomaly #${i + 1}`)
              const node = keys[i]
              try {
                const { key, file, suggestion, status } = node
                if (status === statuses.KEY_NOT_IN_DATASET) {
                  spinner.info(`${key} ${file}`)

                  const { name = dashToRegular(key) } = await inquirer.prompt([
                    {
                      type: "input",
                      name: "name",
                      message: "Please give this entry a name (for humans)",
                      default: dashToRegular(key),
                      when: !yes
                    }
                  ])
                  const suggestions = langs.reduce((acc, curr) => {
                    acc[curr] = suggestion.value || name
                    return acc
                  }, {})

                  const { doTranslate } = await inquirer.prompt([
                    {
                      type: "confirm",
                      name: "doTranslate",
                      message: "Do you want me to translate?",
                      default: false,
                      when: !yes
                    }
                  ])

                  if (doTranslate) {
                    for (let j = 0; j < langs.length; j++) {
                      const lang = langs[j]

                      spinner.info("Getting translation for " + lang)
                      const result = await t.translate(
                        camelToRegular(suggestion.value || name),
                        lang
                      )
                      spinner.succeed("Translation done")
                      const translation =
                        result[1].data.translations[0].translatedText

                      suggestions[lang] = translation
                    }
                  }

                  let { ...values } = await inquirer.prompt([
                    ...langs.map(l => ({
                      type: "input",
                      name: l,
                      message: `Set value for ${l}`,
                      default: suggestions[l],
                      when: !yes
                    }))
                  ])

                  if (yes) {
                    values = langs.reduce((acc, curr) => {
                      acc[curr] = suggestions[curr] || dashToRegular(key)
                      return acc
                    }, {})
                  }

                  spinner.succeed(
                    `Translations: ${languages
                      .map(l => l + ":" + values[l])
                      .join("; ")}`
                  )

                  const { doUpload = yes } = await inquirer.prompt([
                    {
                      type: "confirm",
                      name: "doUpload",
                      message: "Ready to upload?",
                      when: !yes
                    }
                  ])

                  if (doUpload) {
                    const doc = {
                      _type: sanityDocType,
                      i18nKey: {
                        _type: "slug",
                        current: key
                      },
                      name,
                      value: [
                        {
                          _key: nanoid(),
                          _type: "localeString",
                          ...values
                        }
                      ]
                    }

                    spinner.info("Creating document")

                    const { _id } = await runCommand({
                      spinner,
                      startText: "Creating document",
                      succeedText: "Document created",
                      failText: "Failed to create document",
                      debug,
                      command: async () => client.create(doc),
                      onFail: console.error
                    })

                    spinner.succeed(`Craeted document: ${_id}`)
                  }
                }
              } catch (e) {
                spinner.fail(e.message)
              }
            }
          }
        }
      }

      const saved = {
        ...texts,
        ...(keys && { missing: keys })
      }
      const { save = yes } = await inquirer.prompt([
        {
          type: "confirm",
          name: "save",
          message: `Ready to save to ${filename}?`,
          when: !yes
        }
      ])
      if (save) {
        await runCommand({
          spinner,
          failText: "Could not save to JSON",
          startText: "Saving to JSON",
          succeedText: "File saved",
          debug: debug,
          command: async () => {
            saveToJson(saved, filename).then(textsSaved =>
              spinner.info(`Saved ${Object.keys(textsSaved).length} keys`)
            )
          }
        })
      }
    }

    if (walk) {
    }
  } catch (e) {
    throw e
  }
}

module.exports = i18n
