export default (styles, style) => {
  const name = style && style.hasOwnProperty("name") ? style.name : style
  return {
    [name]: {
      ...styles
    }
  }
}
