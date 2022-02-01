const firstToUpper = (value: string): string =>
  value
    .split("")
    .map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("")

function swapLastToFirst<T>(
  previousValue: T[],
  currentValue: T,
  currentIndex: number,
  array: any[]
): T[] {
  if (currentIndex >= array.length - 1) {
    previousValue.splice(0, 0, currentValue)
  } else {
    previousValue.push(currentValue)
  }
  return previousValue
}
type FormatNameOptions = {
  separator?: string
}

export function formatName(
  value: string,
  opts: FormatNameOptions = {}
): string {
  const { separator = "," } = opts
  return value
    .split(" ")
    .map(firstToUpper)
    .reduce(swapLastToFirst, [] as string[])
    .map((name: string, index: number, arr: string[]) =>
      index === 0 && arr.length > 1 ? name + separator : name
    )
    .join(" ")
}
