const rewireMobX = require("react-app-rewire-mobx")
const rewireStyledComponents = require("react-app-rewire-styled-components")
// const rewireFileSize = require("react-app-rewire-webpack-bundle-analyzer")

function override(config, env) {
  config = rewireMobX(config, env)
  config = rewireStyledComponents(config, env)

  // if (env === "production") {
  //   config = rewireFileSize(config, env, {
  //     devTool: false,
  //     analyserMode: "static",
  //     reportFilename: "report.html"
  //   })
  // }

  return config
}

module.exports = override
