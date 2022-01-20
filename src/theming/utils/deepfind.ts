export default (obj, propertyPath) => {
  if (!propertyPath) return null

  const properties = propertyPath.split(".")

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
