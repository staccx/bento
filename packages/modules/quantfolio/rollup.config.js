import generateConfig from "@staccx/rollup-config"
import pkg from "./package.json"

const config = generateConfig(pkg)

export default config
