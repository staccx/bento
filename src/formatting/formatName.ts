const firstToUpper = value =>
  value
    .split("")
    .map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("")

const swapLastToFirst = (accumulator, currentValue, currentIndex, array) => {
  if (currentIndex >= array.length - 1) {
    accumulator.splice(0, 0, currentValue)
  } else {
    accumulator.push(currentValue)
  }
  return accumulator
}
type FormatNameOptions = {
  separator?: string
}

export default (value: string, opts: FormatNameOptions = {}) => {
  const { separator = "," } = opts
  return value
    .split(" ")
    .map(firstToUpper)
    .reduce(swapLastToFirst, [])
    .map((name, index, arr) =>
      index === 0 && arr.length > 1 ? name + separator : name
    )
    .join(" ")
}
