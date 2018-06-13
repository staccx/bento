export default openapi => {
  let tags = []
  Object.keys(openapi.paths).map(key => {
    const path = openapi.paths[key]
    Object.keys(path).map(opKey => {
      const operation = path[opKey]
      tags = tags.concat(operation.tags)
    })
  })
  return tags.filter((value, index, self) => self.indexOf(value) === index)
}
