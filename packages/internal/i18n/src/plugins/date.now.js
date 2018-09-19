import getLocaleOptions from "./_getLocaleOptions"

export default (input, language, options) => {
  const opts = getLocaleOptions("timeNow", language, options)
  return input.replace(
    "{date.now}",
    new Date().toLocaleDateString(language, opts)
  )
}
