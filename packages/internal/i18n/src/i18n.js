const format = require("string-format-obj")
const STACC_X_LANGUAGE_KEY = "stacc-x-bento-locale"
/**
 * Class to be used as singleton so that translations can be done out of rendering
 */
class i18n {
  init({ texts, language, debug, data, plugins, pluginOptions }) {
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
    this.debug = debug || false
    this.data = data
    this.plugins = plugins || []
    this.pluginOptions = pluginOptions || {}

    return this.detectLanguage()
  }

  setLanguage(language) {
    this.language = language
    localStorage.setItem(STACC_X_LANGUAGE_KEY, language)
    this.log(`language set to ${language}`)
  }

  translate(key, data) {
    if (!this.texts) {
      return null
    }

    if (!this.texts.hasOwnProperty(key)) {
      console.warn(`Key no part of texts: ${key}`, this.texts)
      return `Missing entry: ${key} in all languages`
    }

    const val = this.getValue(key)

    if (!val.hasOwnProperty(this.language)) {
      console.warn(`${key} does not exist in ${this.language} dataset.`)
      return `Missing key: ${key}` // TODO: Make fallback?
    }

    const formattingData = Object.assign({}, this.data, data)
    // TODO: Handle commonly used us, like currency, phonenumber, date.now etc.
    try {
      const result = this.convert(val)
      // Run through plugins
      const pluginated = this.runPlugins(result, formattingData)
      return format(pluginated, formattingData)
    } catch (error) {
      console.error(error, data, key)

      return `${key} seems to be malformed in ${
        this.language
      } using ${formattingData.toString()}`
    }
  }

  getValue(key) {
    return this.texts[key]
  }

  convert(value) {
    if (value.hasOwnProperty(this.language)) {
      return value[this.language]
    }

    // TODO: What should we return in these cases?
    /**
     * We can use a fallback
     * We can use a value that actually exists on the object
     * We can send debug string (perhaps only if debug = true)
     */
    return null
  }

  runPlugins(val, data) {
    return this.plugins.reduce((acc, current) => {
      return current(acc, this.language, this.pluginOptions, data)
    }, val)
  }

  log(text, level = "info") {
    if (this.debug) {
      switch (level) {
        default:
          console.log(text)
      }
    }
  }

  hasLanguage(language) {
    return this.languages.indexOf(language) !== -1
  }

  detectLanguage() {
    this.log(`Finding language`)
    console.time("detect-language")
    return new Promise(resolve => {
      const value = localStorage.getItem(STACC_X_LANGUAGE_KEY)
      console.timeEnd("detect-language")
      if (!value) {
        // Check navigator language
        if (this.hasLanguage(navigator.language)) {
          this.log(
            `Found language in navigator language: ${navigator.language}`
          )
          return resolve(navigator.language)
        }
        // Check navigator languages
        for (let i = 0; i < navigator.languages.length; i++) {
          const locale = navigator.languages[i]

          // Check each language if it exist
          if (this.hasLanguage(locale)) {
            this.log(`Found language in navigator languages: ${locale}`)
            return resolve(locale)
          }

          // Check if the first part of language exists e.g "en_US" -> "en"
          if (locale.includes("-")) {
            const l = locale.split("-")[0] // take first piece of this

            if (this.hasLanguage(l)) {
              this.log(`Found language by splitting locale ${locale} into ${l}`)

              return resolve(l)
            }
          }
        }
        const language = this.language || this.languages[0]
        this.log(`Falling back to ${language}`)

        return resolve(language)
      }
      this.log(`Found language in local storage: ${value}`)
      return resolve(value)
    })
  }
}

/**
 * Export the instance for use with the context provider and elsewhere
 * @type {i18n}
 */
const instance = new i18n()

export default instance
