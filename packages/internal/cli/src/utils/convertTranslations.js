module.exports = translations =>
  translations.reduce((result, current) => {
    result[current.key] = current.value
    return result
  }, {})
