const path = require("path")
const { createConfig, babel } = require("webpack-blocks")

const wrapperPath = path.join(__dirname, "src/Theme/ThemeWrapper.js")
console.log(wrapperPath)
module.exports = {
  webpackConfig: createConfig([babel()]),
  skipComponentsWithoutExample: true,
  require: [path.resolve(__dirname, "styleguide.setup.js")],
  styleguideComponents: {
    Wrapper: wrapperPath
  }
}
