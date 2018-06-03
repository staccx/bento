import color from "color"

export default (colorString, amount) =>
  color(colorString)
    .lighten(amount)
    .string()
