/**
 * @param prop - The prop you want mapped
 * @param values - The possible values
 * @param defaultValue - Fallback value
 * @returns {Function}
 */
export function mapProp(prop: string, values: any, defaultValue: string) {
  return (props: any) => {
    if (props.hasOwnProperty(prop)) {
      const val = props[prop]
      if (values.hasOwnProperty(val)) {
        return values[val]
      }
    }
    return defaultValue
  }
}
