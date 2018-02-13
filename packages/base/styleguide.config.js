const path = require("path")
const { createConfig, babel } = require("webpack-blocks")

const wrapperPath = path.join(__dirname, "src/Theme/ThemeWrapper.js")
console.log(wrapperPath)
module.exports = {
  webpackConfig: createConfig([babel()]),
  styleguideComponents: {
    Wrapper: wrapperPath
  }
}
