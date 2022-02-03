/**
 * Partitions an array based on a condition on each element
 * @example const [under5, overOrEqual5] = partition([1,2,3,4,5,6,7,8], e => e < 5) -> returns [[1,2,3,4], [5,6,7,8]
 * @param list
 * @param condition
 * @return {*}
 */
export function partition<Type>(
  list: Type[],
  condition: (element: Type) => boolean
) {
  return list.reduce<[Type[], Type[]]>(
    (result, element) => {
      result[condition(element) ? 0 : 1].push(element)
      return result
    },
    [[], []]
  )
}
