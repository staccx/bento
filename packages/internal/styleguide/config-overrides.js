const rewireMobX = require("react-app-rewire-mobx")
const rewireStyledComponents = require("react-app-rewire-styled-components")
const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer")
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting")

function override(config, env) {
  config = rewireMobX(config, env)
  config = rewireStyledComponents(config, env)
  config = rewireVendorSplitting(config, env)

  if (env === "production") {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: "static",
      reportFilename: "report.html"
    })
  }
  return config
}

module.exports = override
