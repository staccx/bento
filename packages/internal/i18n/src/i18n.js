import loglevel from "loglevel"
const format = require("string-format-obj")
export const STACC_X_LANGUAGE_KEY = "stacc-x-bento-locale"

/**
 * Class to be used as singleton so that translations can be done out of rendering
 */
class i18n {
  init({
    texts,
    language,
    debug,
    logLevel = 5,
    data,
    plugins,
    pluginOptions,
    middleware = []
  }) {
    return new Promise(resolve => {
      this.texts = texts
      this.languages = Object.keys(texts)
        .map(key => texts[key])
        .reduce((acc, current) => {
          if (!current) {
            return acc
          }
          const languages = Object.keys(current).filter(
            k => acc.indexOf(k) === -1
          )
          return [...acc, ...languages]
        }, [])

      this.language = language
      /**
       * @deprecated
       * @type {*|boolean}
       */
      this.debug = debug || false
      this.data = data
      this.plugins = plugins || []
      this.pluginOptions = pluginOptions || {}

      // run middleware
      middleware.forEach(mid => {
        mid(this)
      })

      // Keep debug for backwards compability
      loglevel.setLevel(this.debug ? 0 : logLevel)
      return resolve(language || this.languages[0])
    })
  }

  setLanguage(language) {
    this.language = language
    localStorage.setItem(STACC_X_LANGUAGE_KEY, language)
    loglevel.info(`language set to ${language}`)
  }

  translate(key, data, fallback) {
    if (!this.texts) {
      return null
    }

    if (!this.texts.hasOwnProperty(key)) {
      loglevel.warn(`Key no part of texts: ${key}`, this.texts, fallback)
      if (!fallback) {
        return `Missing entry: ${key} in all languages`
      }
    }

    const val = this.getValue(key)

    if (!val || !val.hasOwnProperty(this.language)) {
      loglevel.warn(`${key} does not exist in ${this.language} dataset.`)
      if (!fallback) {
        return `Missing key: ${key}` // TODO: Make fallback?
      }
    }

    const formattingData = Object.assign({}, this.data, data)
    try {
      return this.process(this.convert(val) || fallback, formattingData)
    } catch (error) {
      loglevel.error(error, data, key)
      return `${key} seems to be malformed in ${
        this.language
      } using ${formattingData.toString()}`
    }
  }

  getValue(key) {
    return this.texts[key]
  }

  convert(value) {
    if (value && value.hasOwnProperty(this.language)) {
      return value[this.language]
    }

    loglevel.warn(
      `Could not convert; ${value}`,
      `Not present in: ${this.language}`
    )
    // TODO: What should we return in these cases?
    /**
     * We can use a fallback
     * We can use a value that actually exists on the object
     * We can send debug string (perhaps only if debug = true)
     */
    return null
  }

  process(val, data) {
    if (Array.isArray(val)) {
      return val
    }
    const formattingData = Object.assign({}, this.data, data)
    loglevel.debug("Before running plugins", val)
    const pluginated = this.runPlugins(val, formattingData)
    loglevel.debug(pluginated, formattingData)
    return format(pluginated, formattingData)
  }

  runPlugins(val, data) {
    return this.plugins.reduce((acc, current) => {
      return current(acc, this.language, this.pluginOptions, data)
    }, val)
  }

  hasLanguage(language) {
    return this.languages.indexOf(language) !== -1
  }
}

/**
 * Export the instance for use with the context provider and elsewhere
 * @type {i18n}
 */
const instance = new i18n()

export default instance
