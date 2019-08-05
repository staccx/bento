export default (value, mask = "XXX XX XXX") => {
  const stringValue = "" + value
  let returnValue = ""
  let indexString = 0
  for (
    let indexMask = 0;
    indexMask < mask.length && indexString < stringValue.length;
    indexMask++
  ) {
    returnValue +=
      mask.charAt(indexMask) === "X"
        ? stringValue.charAt(indexString++)
        : mask.charAt(indexMask)
  }
  return returnValue
}
