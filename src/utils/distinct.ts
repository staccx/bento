const unique = (value, index, self) => self.indexOf(value) === index

export const distinct = (
  list,
  distinctor: string | null = null,
  func = item => item
) => {
  const items = list.map(func).filter(unique)

  if (!distinctor) {
    return items
  }

  const dict = items.reduce((accumulator, item) => {
    if (!accumulator[item[distinctor]]) {
      accumulator[item[distinctor]] = item
    }
    return accumulator
  }, {})

  return Object.values(dict)
}
