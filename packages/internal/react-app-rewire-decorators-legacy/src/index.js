const traverse = function(o, fn) {
  for (const i in o) {
    fn.apply(this, [i, o[i], o])
    if (o[i] !== null && typeof o[i] === "object") {
      traverse(o[i], fn)
    }
  }
}

export default (config, env) => {
  traverse(config, (name, value, parent) => {
    if (name === "test" && String(value) === String(/\.(js|mjs|jsx|ts|tsx)$/)) {
      parent.options.plugins.push([
        "@babel/plugin-proposal-decorators",
        {
          legacy: true
        }
      ])
    }
  })

  return config
}
