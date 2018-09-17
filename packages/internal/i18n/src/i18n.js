const format = require("string-format-obj")

/**
 * Class to be used as singleton so that translations can be done out of rendering
 */
class i18n {
  init({ texts, language, debug, data }) {
    this.texts = texts
    this.language = language
    this.debug = debug
    this.data = data
  }

  setLanguage(language) {
    this.language = language
  }

  translate(key, data) {
    if (!this.texts) {
      return null
    }

    if (!this.texts.hasOwnProperty(key)) {
      throw new Error("Key no part of texts")
    }

    const val = this.texts[key]

    if (!val.hasOwnProperty(this.language)) {
      console.warn(`${key} does not exist in ${this.language} dataset.`)
      return `Missing key: ${key}` // TODO: Make fallback?
    }

    const formattingData = Object.assign({}, this.data, data)
    // TODO: Handle commonly used us, like currency, phonenumber, date.now etc.
    try {
      const result = val[this.language]
      return format(result, formattingData)
    } catch (error) {
      console.error(error, data, key)

      return `${key} seems to be malformed in ${
        this.language
      } using ${formattingData.toString()}`
    }
  }

  log(text, level = "info") {
    if (this.debug) {
      switch (level) {
        default:
          console.log(text)
      }
    }
  }
}

/**
 * Export the instance for use with the context provider and elsewhere
 * @type {i18n}
 */
const instance = new i18n()

export default instance
