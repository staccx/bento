const rollup = require("rollup")
const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const resolve = require("rollup-plugin-node-resolve")
const json = require("rollup-plugin-json")
// const eslint = require("rollup-plugin-eslint")
// const pkg = require("./package.json")
// const filesize = require("rollup-plugin-filesize")
const path = require("path")
const glob = require("glob")
const ProgressBar = require("progress")
/* eslint-disable-next-line */
const colors = require("colors")

const external = [
  "react",
  "react-dom",
  "prop-types",
  "styled-components",
  "react-jsonschema-form",
  "@staccx/theme"
]

const defaultPlugins = [
  json(),
  babel({
    exclude: ["node_modules/**"],
    plugins: ["external-helpers"]
  }),
  resolve(),
  commonjs({
    namedExports: {
      "../../node_modules/text-mask-core/dist/textMaskCore.js": [
        "createTextMaskInputElement"
      ]
    }
  })
  // eslint({})
  // filesize()
]

glob("./src/**/*.js", {}, function(er, files) {
  const components = files
    .map(file => {
      const basename = path.basename(file)
      const firstLetter = basename.charAt(0)
      if (firstLetter === firstLetter.toUpperCase()) {
        return {
          path: file,
          name: basename
        }
      }
      return null
    })
    .filter(file => file)

  console.log("Building individual Base components".underline.white)
  const bar = new ProgressBar("building :name [:bar] :current :etas".white, {
    total: components.length,
    width: 20,
    clear: true
  })

  components.forEach(module => {
    rollup
      .rollup({
        input: module.path,
        external: external,
        plugins: defaultPlugins,
        onwarn: function(message) {
          return `${message.source} has an issue`
        }
      })
      .then(bundle => {
        return bundle
          .write({
            file: `dist/lib/${module.name}`,
            format: "cjs"
          })
          .then(() => {
            bar.tick({
              name: module.name
            })
            if (bar.complete) {
              console.log(`Built ${components.length} components`.white)
              console.log("Complete".underline.green)
            }
          })
      })
  })
})
