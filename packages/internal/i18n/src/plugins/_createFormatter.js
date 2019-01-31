import getLocaleOptions from "./_getLocaleOptions"
import logLevel from "loglevel"

const createFormatter = ({
  value,
  name,
  formatFunction,
  language,
  regex,
  options,
  data = {},
  valueParser = val => val
}) => {
  const opts = getLocaleOptions(name, language, options)

  const match = value.match(regex)
  if (!match) {
    return value
  }
  logLevel.debug("createFormatter - ", "Found match", match)
  logLevel.debug("Running formatter with data:", data)

  const r = new RegExp(regex.source)
  const val = match.reduce((acc, m) => {
    const mat = m.match(r)
    const field = mat[1]
    if (data.hasOwnProperty(field)) {
      logLevel.debug("createFormatter - ", "Found field in data", field)
      const val = acc.replace(
        mat.input,
        formatFunction(valueParser(data[field]), opts)
      )
      logLevel.debug("Replaced", mat.input, "with", val)

      return val
    } else {
      logLevel.debug(
        "createFormatter - ",
        "Trying value",
        mat.input,
        valueParser(field),
        formatFunction(valueParser(field), opts),
        opts
      )
      try {
        const val = acc.replace(
          mat.input,
          formatFunction(valueParser(field), opts)
        )
        logLevel.debug("Replaced", mat.input, "with", val)

        return val
      } catch (e) {
        logLevel.error("createFormatter - ", e)
      }
    }

    return acc
  }, value)

  logLevel.debug("Done. Replaced", value, "with", val)

  return val

  // for (const m of match) {
  //   const r = new RegExp(regex.source)
  //   const mat = m.match(r)
  //   logLevel.debug("createFormatter - ", "Mat", mat)
  //   if (mat.length > 1) {
  //     const field = mat[1]
  //     if (data.hasOwnProperty(field)) {
  //       return value.replace(
  //         regex,
  //         formatFunction(valueParser(data[field]), opts)
  //       )
  //     } else {
  //       try {
  //         return value.replace(regex, formatFunction(valueParser(field), opts))
  //       } catch (e) {
  //         logLevel.error("createFormatter - ", e)
  //       }
  //     }
  //   }
  // }
  //
  // return value
}
export default createFormatter
