/**
 * @param prop - The prop you want mapped
 * @param values - The possible values
 * @param defaultValue - Fallback value
 * @returns {Function}
 */
export default (prop, values, defaultValue) => props => {
  if (props.hasOwnProperty(prop)) {
    const val = props[prop]
    if (values.hasOwnProperty(val)) {
      return values[val]
    }
  }
  return defaultValue
}
