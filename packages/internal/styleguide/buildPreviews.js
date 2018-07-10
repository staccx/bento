const rollup = require("rollup")
const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const resolve = require("rollup-plugin-node-resolve")
const filesize = require("rollup-plugin-filesize")
const json = require("rollup-plugin-json")
const glob = require("glob")
const fs = require("fs-extra")
const path = require("path")
const reactDocs = require("react-docgen")

const external = [
  "react",
  "react-dom",
  "prop-types",
  "styled-components",
  "react-jsonschema-form",
  "@staccx/theme"
]

const defaultPlugins = [
  resolve(),
  json(),
  babel({
    exclude: ["node_modules/**"],
    plugins: ["external-helpers"]
  }),

  commonjs(),
  // eslint({})
  filesize()
]

let props = {}
let source = {}

glob("../../**/*.preview.js", {}, (error, files) => {
  if (error) {
    console.error(error)
    return
  }
  fs.writeFile(
    "./src/generated/previews.js",
    `
  ${files
    .map(file => {
      const basename = path.basename(file)
      const name = basename.replace(".preview.js", "")
      const filename = path.resolve(__dirname, file.replace(".preview", ""))
      const data = fs.readFileSync(filename, "utf8")
      const parsed = reactDocs.parse(data)

      source[name] = data
      props[name] = parsed
      return `export{default as  ${name}} from "../../${file}"\n`
    })
    .join("")}  
  `
  )
    .then(() => {
      const data = fs.readFileSync("../theme/src/themeProps.js", "utf8")
      const parsed = reactDocs.parse(data)
      props.themeProps = parsed
    })
    .then(() => {
      fs.writeJsonSync("./src/generated/props.json", props)
      fs.writeJsonSync("./src/generated/source.json", source)
      rollup
        .rollup({
          input: "./src/generated/previews.js",
          external: external,
          plugins: defaultPlugins,
          onwarn: function(message) {
            return `${message.source} has an issue`
          }
        })
        .then(bundle => {
          return bundle
            .write({
              file: `./src/generated/components.js`,
              format: "cjs"
            })
            .then(() => {
              // fs.unlink("./previews.js").then(() => console.log("done"))
            })
        })
        .catch(console.error)
    })
})
