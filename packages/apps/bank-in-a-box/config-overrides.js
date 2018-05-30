const rewireMobX = require("react-app-rewire-mobx")
const rewireStyledComponents = require("react-app-rewire-styled-components")
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");

function override(config, env) {
  config = rewireMobX(config, env)
  config = rewireStyledComponents(config, env)
  config = rewireVendorSplitting(config, env);

  return config
}

module.exports = override
