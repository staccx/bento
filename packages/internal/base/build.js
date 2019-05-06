const rollup = require("rollup")
const generateConfig = require("@staccx/rollup-config")
// const eslint = require("rollup-plugin-eslint")
const pkg = require("./package.json")
// const filesize = require("rollup-plugin-filesize")
const path = require("path")
const glob = require("glob")
const ProgressBar = require("progress")
/* eslint-disable-next-line */
const colors = require("colors")

glob("./src/**/!(*.preview|*.stories).js", {}, function(er, files) {
  const theming = {
    path: path.resolve("./src/theming/index.js"),
    name: "Theming.js"
  }

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
    .concat([theming])

  console.log("Building individual Base components".underline.white)
  const bar = new ProgressBar("building :name [:bar] :current :etas".white, {
    total: components.length,
    width: 20,
    clear: true
  })

  components.forEach(module => {
    const config = generateConfig({
      ...pkg,
      main: `dist/lib/cjs.${module.name}`,
      module: `dist/lib/es.${module.name}`
    })
    config.input = module.path
    rollup
      .rollup({
        ...config,
        onwarn: function(message) {
          return `${message.source} has an issue`
        }
      })
      .then(bundle => {
        return bundle
          .write({
            file: `dist/lib/${module.name}`,
            name: module.name,
            format: "es"
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
      .catch(console.error)
  })
})
