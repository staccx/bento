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
  if (match.length > 1) {
    const field = match[1]
    if (data.hasOwnProperty(field)) {
      return value.replace(regex, formatFunction(data[field], opts)) // TODO: format Currency
    }
  }

  return value
}
export default createFormatter
