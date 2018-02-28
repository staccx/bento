const rewireMobX = require('react-app-rewire-mobx')

function override(config, env)
{
  config = rewireMobX(config, env)
  return config
}

module.exports = override