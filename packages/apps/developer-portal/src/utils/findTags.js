export default openapi => {
  let tags = []
  if (openapi.tags) {
    return openapi.tags
  }
  Object.keys(openapi.paths).forEach(key => {
    const path = openapi.paths[key]
    Object.keys(path).forEach(opKey => {
      const operation = path[opKey]
      tags = tags.concat(
        operation.tags
          ? operation.tags.map(tag => {
              if (typeof tag === "object") {
                return tag
              }
              return {
                name: tag
              }
            })
          : []
      )
    })
  })
  return tags.filter(
    (value, index, self) => self.findIndex(t => t.name === value.name) === index
  )
}
