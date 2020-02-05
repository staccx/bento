import color from "color"

export const darken = (colorString, amount) =>
  color(colorString)
    .darken(amount)
    .string()
