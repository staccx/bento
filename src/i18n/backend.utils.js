export const resourceReducer = language => (acc, current) => {
  acc[current.key] = current.value.map(item => item[language])

  return acc
}
