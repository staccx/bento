export const resourceReducer = language => (acc, current) => {
  acc[current.key] = current.value.map(
    item =>
      item[language] ??
      item[language.toUpperCase()] ??
      item[language.toLowerCase()]
  )

  return acc
}
