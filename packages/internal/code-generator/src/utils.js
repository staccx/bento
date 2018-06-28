export const blast = obj => {
  if (!obj) return "{}"
  const keys = Object.keys(obj)
  let result = "{"
  keys
    .map((key, index) => {
      return `"${key}": "${obj[key]}"${index < keys.length - 1 ? "," : ""}`
    })
    .map(element => {
      if (element) {
        console.log("concat", element)
        result += element
      }
    })
  result += "}"
  return result
}
