import color from "color"

export const opacity = (colorString, alpha) => {
  return color(colorString)
    .alpha(alpha)
    .string()
}
