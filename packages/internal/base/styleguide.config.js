const path = require("path")
const { createConfig, babel } = require("webpack-blocks")

const Wrapper = path.join(__dirname, "src/Theme/ThemeWrapper.js")
module.exports = {
  webpackConfig: createConfig([babel(), hack()]),
  skipComponentsWithoutExample: false,
  require: [path.resolve(__dirname, "styleguide.setup.js")],
  styleguideComponents: {
    Wrapper: Wrapper
  }
}

function hack() {
  return (context, { merge }) => {
    return merge({
      node: {
        fs: "empty",
        tls: "empty",
        net: "empty"
      }
    })
  }
}
