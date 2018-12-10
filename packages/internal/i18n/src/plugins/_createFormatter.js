import getLocaleOptions from "./_getLocaleOptions"

const createFormatter = ({
  value,
  name,
  formatFunction,
  language,
  regex,
  options,
  data = {}
}) => {
  const opts = getLocaleOptions(name, language, options)

  const match = value.match(regex)
  if (!match) {
    return value
  }
  for (const m of match) {
    const r = new RegExp(regex.source)
    const mat = m.match(r)
    if (mat.length > 1) {
      const field = mat[1]
      if (data.hasOwnProperty(field)) {
        return value.replace(regex, formatFunction(data[field], opts)) // TODO: format Currency
      }
    }
  }

  return value
}
export default createFormatter
