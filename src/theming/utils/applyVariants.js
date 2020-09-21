import deepfind from "./deepfind"
import { themeLogger } from "../theme.logger"
import { VARIANT_DEFAULT } from "../themeContants"

/**
 * Apply variants for a component. Allows for multiple variants
 * @param themeProps
 * @returns {function} that styled-components uses in the resolving.
 */
export default themeProps => props => {
  const { variant = VARIANT_DEFAULT, theme } = props

  if (!theme) {
    themeLogger.warn("No theme!", variant)
    return null
  }

  if (!themeProps) {
    themeLogger.error("No theme props!", theme, variant, props)
    return null
  }

  let name = null
  if (themeProps.hasOwnProperty("references")) {
    name = themeProps.references?.name ?? name
  } else if (themeProps.hasOwnProperty("name")) {
    name = themeProps.name
  } else {
    name = themeProps
  }

  if (!name) {
    themeLogger.warn("No name!", variant, theme)
    return null
  }

  return getVariants(theme, variant, name)
}

/**
 * Get variants.
 * @example: resolveVariants(theme, "_default", "button", themeProps)
 * @param theme
 * @param variant - string, array, function or object
 * @param name - name of the style group e.g "button"
 * @returns {object, array}
 */
const getVariants = (theme, variant, name) => {
  const type = typeof variant
  if (Array.isArray(variant)) {
    themeLogger.info("Variant is an array", variant)
    return variant.map(v => getVariant(theme, v, name))
  } else if (type === "function") {
    themeLogger.info("Variant is a function", variant)
    return getVariant(theme, variant({ name, theme }), name)
  } else if (type === "string") {
    themeLogger.info("Variant is a string", variant)
    return getVariant(theme, variant, name)
  } else if (type === "object") {
    themeLogger.info("Variant is an object", variant)
    const keys = Object.keys(variant)
    return keys.map(key => getVariant(theme, variant[key], key))
  }
  themeLogger.warn("Unsupported variant type", type, variant, name)
  return null
}
/**
 * Get single variant.
 * @param theme
 * @param variant
 * @param name
 * @returns {object}
 */
const getVariant = (theme, variant, name) => {
  const styles = deepfind(theme, name)
  if (!styles || !styles[variant]) {
    themeLogger.warn("Could not find any styles for variant", variant, name)
    return null
  }

  return styles[variant]
}
