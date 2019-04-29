import loglevel from "loglevel"

import f from "string-format-obj"

// val, data, baseData
const format = options => {
  const { value, data, plugins } = options
  if (Array.isArray(value)) {
    loglevel.warn("Value is array")
    return value
  }

  loglevel.debug("Before running plugins", value)
  try {
    const input = !plugins || !plugins.length ? value : runPlugins(options)
    return f(input, data)
  } catch (e) {
    loglevel.error(`Error during running of plugin`)
    throw e
  }
}

const runPlugins = ({ value, data, language, plugins, pluginOptions }) => {
  return plugins.reduce((acc, current) => {
    return current(acc, language, pluginOptions, data)
  }, value)
}

export default format
