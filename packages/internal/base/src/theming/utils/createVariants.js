export default (variants, style) => {
  const name = style && style.hasOwnProperty("name") ? style.name : style
  return {
    [name]: {
      ...variants
    }
  }
}
