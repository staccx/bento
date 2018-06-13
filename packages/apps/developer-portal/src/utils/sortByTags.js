export default (openapi, tags) => {
  let operations = {}

  for (const tag of tags) {
    const name = tag.name || tag
    console.log(name, tags)
    Object.keys(openapi.paths).map(key => {
      const path = openapi.paths[key]
      Object.keys(path).map(opKey => {
        const operation = path[opKey]
        if (operation.tags.indexOf(name) !== -1) {
          if (!operations[name]) {
            operations[name] = {}
          }
          if (!operations[name][key]) {
            operations[name][key] = {}
          }

          operations[name][key][opKey] = operation
        }
      })
    })
  }
  console.log(operations)
  return operations
}
