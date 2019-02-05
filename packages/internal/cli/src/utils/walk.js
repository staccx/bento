const fs = require("fs-extra")
const glob = require("glob")
const walk = require("acorn-jsx-walk").default
const getLineFromPos = require("get-line-from-pos")
const { dashIt } = require("@staccx/formatting")
const { setupSpinner, traverse } = require("../cmds/__helpers")
const statuses = require("./i18nStatuses")

const getSuggestion = (node, key) => {
  const child = node.children.find(child => child.type === "Literal")

  let value = child ? child.value.replace(/\n/g, "").trim() : null

  if (!value) {
    traverse(node.children, (key, val, parent) => {
      if (key === "value" && !val.includes("\n")) {
        value = val
      }
    })
  }
  return {
    value,
    key: key || (value ? dashIt(value) : null)
  }
}

const spinner = setupSpinner()

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
        spinner.fail(error)
        process.exit(1)
      }

      for (const file of files) {
        const contents = await fs.readFile(file, "utf-8")

        try {
          walk(contents, {
            JSXElement: node => {
              try {
                if (node.openingElement.name.name === component) {
                  let keyAttr = null
                  // console.log(typeof node.openingElement.attributes)
                  traverse(
                    node.openingElement.attributes,
                    (key, value, parent) => {
                      if (key === "name") {
                        const { name } = value
                        if (name === "i18nKey") {
                          keyAttr = parent
                        }
                      }
                    }
                  )
                  // const keyAttr = node.openingElement.attributes.find(
                  //   attr => attr.name.name === "i18nKey"
                  // )
                  let line = getLineFromPos(contents, node.start)
                  if (!keyAttr) {
                    keys.push({
                      file,
                      line,
                      status: statuses.NO_KEY,
                      suggestion: getSuggestion(node)
                    })
                    return
                  }

                  const key = keyAttr.value.expression
                    ? keyAttr.value.expression.value
                    : keyAttr.value.value || null

                  if (!key) {
                    console.log("Not found", keyAttr)
                  }

                  if (key in texts) {
                    const langs = {}
                    for (const lang of languages) {
                      langs[lang] = !!texts[key][lang]
                    }
                    keys.push({ key, status: statuses.OK, languages: langs })
                  } else {
                    keys.push({
                      key,
                      line,
                      file,
                      suggestion: getSuggestion(node, key),
                      status: statuses.KEY_NOT_IN_DATASET
                    })
                  }
                }
              } catch (e) {
                spinner.fail(e.message)
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
