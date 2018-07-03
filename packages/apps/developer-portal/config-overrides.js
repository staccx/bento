const rewireMobX = require("react-app-rewire-mobx")
// const rewireStyledComponents = require("react-app-rewire-styled-components")
const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer")
const path = require("path")

function override(config, env) {
  // config = rewireMobX(config, env)
  // config = rewireStyledComponents(config, env)
  if (env === "production") {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: "static",
      reportFilename: "report.html"
    })
  }

  const hack = config.module.rules[1]

  const t = hack.oneOf[1]
  t.include = [
    t.include,
    path.resolve(__dirname, "../../../node_modules/reftools"),
    path.resolve(__dirname, "../../../node_modules/swagger2openapi")
  ]

  // config.module.rules[0] = hack.include

  console.log(JSON.stringify(config.module.rules, null, 2))
  return config
}

module.exports = override
