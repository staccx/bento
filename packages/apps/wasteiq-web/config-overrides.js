const rewireStyledComponents = require("react-app-rewire-styled-components")

function override(config, env) {
  config = rewireStyledComponents(config, env)

  if (env === "production") {
    config.devtool = false
  }

  return config
}

module.exports = override
