import generateConfig from "./src/export"
import pkg from "./package.json"

const config = generateConfig(pkg)

console.log("config is ", config)

// Config overrides go here

export default config
