import deepfind from "./deepfind"
import { VARIANT_DEFAULT } from "../../constants/themeContants"

/**
 * Apply variants for a component. Allows for multiple variants
 * @param themeProps
 * @returns {function} that styled-components uses in the resolving.
 */
export default themeProps => props => {
  const { variant = VARIANT_DEFAULT, theme } = props

  if (!theme) {
    console.warn("No theme!", variant)
    return null
  }

  if (!themeProps) {
    console.warn("No theme props!", theme, variant, props)
    return null
  }

  const name = themeProps.hasOwnProperty("name") ? themeProps.name : themeProps

  if (!name) {
    console.warn("No name!", variant, theme)
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
    return variant.map(v => getVariant(theme, v, name))
  } else if (type === "function") {
    return getVariant(theme, variant({ name, theme }), name)
  } else if (type === "string") {
    return getVariant(theme, variant, name)
  } else if (type === "object") {
    const keys = Object.keys(variant)
    return keys.map(key => getVariant(theme, variant[key], key))
  }
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
  if (!variant) {
    return null
  }

  if (!name) {
    return null
  }

  const styles = deepfind(theme, name)
  if (!styles || !styles[variant]) {
    return null
  }

  return styles[variant]
}
