/**
 * @deprecated use lodash.get
 * @param obj
 * @param propertyPath
 * @param separator
 * @return {null|*}
 */

export const deepFind = (obj, propertyPath, separator = ".") => {
  if (!propertyPath) return null

  const properties = propertyPath.split(separator)

  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i]

    if (!obj || !obj.hasOwnProperty(prop)) {
      return null
    } else {
      obj = obj[prop]
    }
  }
  return obj
}
