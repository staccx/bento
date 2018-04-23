const path = require("path")
const { createConfig, babel } = require("webpack-blocks")

const Wrapper = path.join(__dirname, "src/Theme/ThemeWrapper.js")
module.exports = {
  webpackConfig: createConfig([babel()]),
  skipComponentsWithoutExample: false,
  require: [path.resolve(__dirname, "styleguide.setup.js")],
  styleguideComponents: {
    Wrapper: Wrapper
  }
}
