import generateConfig from "./src/export"
import pkg from "./package.json"

const config = generateConfig(pkg)

// Config overrides go here

export default config