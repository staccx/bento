const rollup = require("rollup")
const path = require("path")
const glob = require("glob")
const ProgressBar = require("progress")
const pkg = require("./package.json")
const generateConfig = require("@staccx/rollup-config")

glob("./src/export/*.js", {}, function(er, files) {
  const components = files
    .map(file => {
      const basename = path.basename(file)
      return {
        path: file,
        name: basename
      }
    })
    .filter(file => file)

  console.log("Building individual util functions")
  const bar = new ProgressBar("building :name [:bar] :current :etas", {
    total: components.length,
    width: 20,
    clear: true
  })

  components.forEach(module => {
    rollup.rollup(generateConfig(pkg, module.path)).then(bundle => {
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
            console.log(`Built ${components.length} utils`)
            console.log("Complete")
          }
        })
    })
  })
})
