export default (input, language, options) => {
  const opts = options.hasOwnProperty(language)
    ? options[language]
    : options.hasOwnProperty("__default")
      ? options["__default"]
      : options
  return input.replace(
    "{date.now}",
    new Date().toLocaleDateString(language, opts)
  )
}
