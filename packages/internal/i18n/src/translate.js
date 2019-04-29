import loglevel from "loglevel"
import convert from "./convert"
import format from "./format"

/**
 * Translates a key
 * @param texts
 * @param language
 * @param key
 * @param namespace
 * @param data
 * @param fallback
 * @param baseData
 * @return {*}
 */
const translate = ({
  texts,
  language,
  key,
  namespace = null,
  data,
  fallback,
  baseData,
  plugins,
  pluginOptions,
  strict = false
}) => {
  if (!texts) {
    loglevel.error("No texts")
    if (strict) {
      throw new Error("No texts provided!")
    }
    return key
  }

  if (!texts.hasOwnProperty(key)) {
    loglevel.warn(`Key no part of texts: ${key}`, texts, fallback)

    if (!fallback) {
      if (strict) {
        throw new Error("Could not find")
      }
      return key
    }
  }

  const val = texts[key]

  if (!val || !val.hasOwnProperty(language)) {
    loglevel.warn(`${key} does not exist in ${language} dataset.`)
    if (!fallback) {
      if (strict) {
        throw new Error("Could not find")
      }
      return key
    }
  }

  try {
    const converted = convert(val, language) || fallback
    return format({
      value: converted,
      data: Object.assign({}, data, baseData),
      namespace,
      language,
      plugins,
      pluginOptions
    })
  } catch (error) {
    loglevel.error(
      `${key} seems to be malformed in ${language} using ${data.toString()}`
    )
    throw error
  }
}

export default translate
