import generateConfig from "@staccx/rollup-config"
import pkg from "./package.json"

const config = generateConfig(pkg)

// Config overrides go here

config.acorn = { allowHashBang: true }
config.input = "./src/cli.js"
config.external = []
config.plugins = []

export default config
