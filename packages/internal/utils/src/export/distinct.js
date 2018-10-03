const unique = (value, index, self) => self.indexOf(value) === index

export default (list, distinctor = null, func = item => item) => {
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

  return Object.keys(dict).map(key => dict[key])
}
