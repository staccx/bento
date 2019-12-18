import color from "color"

export default (colorString, amount) =>
  color(colorString)
    .darken(amount)
    .string()
