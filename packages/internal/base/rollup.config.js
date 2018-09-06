import generateConfig from "@staccx/rollup-config"
import pkg from "./package.json"

const config = generateConfig(pkg)

config.input = "./src/index.js"
// Config overrides go here
export default config
