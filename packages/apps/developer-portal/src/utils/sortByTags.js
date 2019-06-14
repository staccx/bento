export default (openapi, tags) => {
  let operations = {}

  for (const tag of tags) {
    const name = tag.name || tag
    Object.keys(openapi.paths).forEach(key => {
      const path = openapi.paths[key]
      Object.keys(path).forEach(opKey => {
        const operation = path[opKey]
        if (!operations.hasOwnProperty(name)) {
          operations[name] = []
        }
        operations[name].push({
          ...operation,
          tag: name,
          path: key, // key.replace(`/${name}`, ""),
          type: opKey
        })
      })
    })
  }

  return operations
}
