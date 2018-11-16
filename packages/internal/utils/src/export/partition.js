export default (list, condition) => {
  return list.reduce(
    (result, element) => {
      result[condition(element) ? 1 : 0].push(element)
      return result
    },
    [[], []]
  )
}
