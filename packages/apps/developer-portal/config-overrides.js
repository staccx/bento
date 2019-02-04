const yes = require("@staccx/react-app-rewire-decorators-legacy")

function override (config, env) {
  return yes(config, env)
}

module.exports = override
