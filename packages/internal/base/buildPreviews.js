const rollup = require("rollup")
const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const resolve = require("rollup-plugin-node-resolve")
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
  "react-jsonschema-form"
]

const defaultPlugins = [
  resolve(),
  json(),
  babel({
    exclude: ["node_modules/**"],
    plugins: ["external-helpers"]
  }),

  commonjs()
  // eslint({})
  // filesize()
]

let props = {}

glob("./src/**/*.preview.js", {}, (error, files) => {
  if (error) {
    console.error(error)
    return
  }
  fs.writeFile(
    "previews.js",
    `
  ${files.map(file => {
    const basename = path.basename(file)
    const name = basename.replace(".preview.js", "")
    const filename = path.resolve(__dirname, file.replace(".preview", ""))
    const data = fs.readFileSync(filename, "utf8")
    const parsed = reactDocs.parse(data)
    // console.log(parsed)
    props[name] = parsed
    return `export{default as  ${name}} from "${file}"\n`
  })}  
  `
  ).then(() => {
    fs.writeJson("dist/lib/previews/props.json", props).then(() => {
      rollup
        .rollup({
          input: "./previews.js",
          external: external,
          plugins: defaultPlugins,
          onwarn: function(message) {
            return `${message.source} has an issue`
          }
        })
        .then(bundle => {
          return bundle
            .write({
              file: `dist/lib/previews/index.js`,
              format: "cjs"
            })
            .then(() => {
              // fs.unlink("./previews.js").then(() => console.log("done"))
            })
        })
        .catch(console.error)
    })
  })
})
