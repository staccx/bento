export default function truncate(
  val: string,
  length: number = 20,
  symbol: string = "&hellip;"
) {
  return val.length > length ? val.substring(0, length - 1) + symbol : val
}
