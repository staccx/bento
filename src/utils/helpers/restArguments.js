export default (func, startIndex) => {
  startIndex = startIndex == null ? func.length - 1 : +startIndex
  return () => {
    const length = Math.max(arguments.length - startIndex, 0)
    const rest = Array(length)
    let index = 0
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex]
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest)
      case 1:
        return func.call(this, arguments[0], rest)
      case 2:
        return func.call(this, arguments[0], arguments[1], rest)
    }
    const args = Array(startIndex + 1)
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index]
    }
    args[startIndex] = rest
    return func.apply(this, args)
  }
}
