module.exports = (result, current) => {
  result[current.key] = current.value
  return result
}
