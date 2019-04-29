import loglevel from "loglevel"

/**
 * Converts a value into selected language
 * @param value
 * @param language
 * @return {*}
 */
const convert = (value, language) => {
  if (value && value.hasOwnProperty(language)) {
    return value[language]
  }

  loglevel.warn(`Could not convert; ${value}`, `Not present in: ${language}`)
  // TODO: What should we return in these cases?
  /**
   * We can use a fallback
   * We can use a value that actually exists on the object
   * We can send debug string (perhaps only if debug = true)
   */
  return null
}

export default convert
