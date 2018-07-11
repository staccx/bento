import deepfind from "./deepfind"

/**
 *  background-color: ${p =>
        p.tab === "Example"
          ? color("bg")
          : p.tab === "Variants"
            ? color("bg")
            : color("codeBackground")};
 * @param map
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
