const parseItem = date => new Date(Date.parse(date))

export const parseDate = input => {
  if (Array.isArray(input)) {
    return input.map(parseItem)
  }
  return parseItem(input)
}
