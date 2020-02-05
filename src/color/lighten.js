import color from "color"

export const lighten = (colorString, amount) =>
  color(colorString)
    .lighten(amount)
    .string()
