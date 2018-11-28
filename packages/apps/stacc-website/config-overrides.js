const rewireMobX = require("react-app-rewire-mobx")
const rewireStyledComponents = require("react-app-rewire-styled-components")
const rewireFileSize = require("react-app-rewire-webpack-bundle-analyzer")

function override(config, env) {
  config = rewireMobX(config, env)
  config = rewireStyledComponents(config, env)
  config = rewireFileSize(config, env)
  if (env === "production") {
    config.devtool = false
  }

  return config
}

module.exports = override
