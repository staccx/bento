const unique = (value, index, self) => self.indexOf(value) === index

export function distinct<Type>(
  list: Type[],
  distinctor: keyof Type | null = null,
  func = (item: Type) => item
) {
  const items = list.map(func).filter(unique)

  if (!distinctor) {
    return items
  }

  const dict = items.reduce<any>((previousValue, item) => {
    if (!previousValue[item[distinctor]]) {
      previousValue[item[distinctor]] = item
    }
    return previousValue
  }, {})

  return Object.values(dict) as Type[]
}
