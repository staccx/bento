export default (variants, style) => {
  let name = null
  if (style) {
    if (style.hasOwnProperty("references")) {
      name = style.references?.name ?? style
    } else if (style.hasOwnProperty("name")) {
      name = style.name
    } else {
      name = style
    }
  }
  return {
    [name]: {
      ...variants
    }
  }
}
