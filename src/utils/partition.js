export default (list, condition) => {
  return list.reduce(
    (result, element) => {
      result[condition(element) ? 0 : 1].push(element)
      return result
    },
    [[], []]
  )
}
