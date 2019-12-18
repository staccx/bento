export default (val, length = 20, symbol = "&hellip;") =>
  val.length > length ? val.substr(0, length - 1) + symbol : val
