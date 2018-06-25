export const blast = obj =>
  Object.keys(obj).map(key => {
    return `"${key}": ${obj[key]},`
  })
