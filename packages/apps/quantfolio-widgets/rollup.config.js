import generateConfig from "@staccx/rollup-config"
import pkg from "./package.json"

const config = generateConfig(pkg) //

config.external = ["react", "react-dom"]

export default config
