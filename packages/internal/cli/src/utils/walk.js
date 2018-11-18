const fs = require("fs-extra")
const glob = require("glob")
const walk = require("acorn-jsx-walk").default
const getLineFromPos = require("get-line-from-pos")
const { dashIt } = require("@staccx/formatting")

const status = {
  NO_KEY: "NO_KEY",
  KEY_NOT_IN_DATASET: "KEY_NOT_IN_DATASET",
  OK: "OK"
}

const getSuggestion = (node, key) => {
  const child = node.children.find(child => child.type === "Literal")

  const value = child ? child.value.replace(/\n/g, "").trim() : null
  return {
    value,
    key: key || (value ? dashIt(value) : null)
  }
}

module.exports = ({
  texts,
  languages = [],
  component = "TranslatedText",
  pattern = "./src/**/!(registerServiceWorker).js"
}) => {
  return new Promise((resolve, reject) => {
    const keys = []
    glob(pattern, { ignore: ["**/node_modules/**"] }, async (error, files) => {
      if (error) {
        console.error(error)
        process.exit(1)
      }

      for (const file of files) {
        const contents = await fs.readFile(file, "utf-8")

        try {
          walk(contents, {
            JSXElement: node => {
              try {
                if (node.openingElement.name.name === component) {
                  const keyAttr = node.openingElement.attributes.find(
                    attr => attr.name.name === "i18nKey"
                  )

                  if (!keyAttr) {
                    const line = getLineFromPos(contents, node.start)
                    keys.push({
                      file,
                      line,
                      status: status.NO_KEY,
                      suggestion: getSuggestion(node)
                    })
                    return
                  }

                  const key = keyAttr.value.expression.value

                  if (key in texts) {
                    const langs = {}
                    for (const lang of languages) {
                      langs[lang] = !!texts[key][lang]
                    }
                    keys.push({ key, status: status.OK, languages: langs })
                  } else {
                    keys.push({
                      key,
                      suggestion: getSuggestion(node, key),
                      status: status.KEY_NOT_IN_DATASET
                    })
                  }
                }
              } catch (e) {
                console.log(e)
              }
              // node.openingElement.attributes.forEach(console.log)
            }
          })
        } catch (e) {
          // Ingore for now
        }
      }
      resolve({ keys })
    })
  })
}
