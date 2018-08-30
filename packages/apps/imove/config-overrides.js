const rewireMobX = require("react-app-rewire-mobx")
const rewireStyledComponents = require("react-app-rewire-styled-components")

function override(config, env) {
  config = rewireMobX(config, env)
  config = rewireStyledComponents(config, env)
  return config
}

module.exports = override
