const getLocaleOptions = (plugin = null, language, options) => {
  if (!options) {
    return {}
  }
  if (!plugin) {
    return options
  }

  if (options.hasOwnProperty(plugin)) {
    const pluginOptions = options[plugin]
    if (pluginOptions) {
      // Check whether options has language specific options
      if (pluginOptions.hasOwnProperty(language)) {
        // If yes, spread them on top of pluginOptions
        return Object.assign({}, pluginOptions, pluginOptions[language])
      }

      // If no, return the pluginOptions
      return pluginOptions
    }
    return options
  }
  return options
}

export default getLocaleOptions
