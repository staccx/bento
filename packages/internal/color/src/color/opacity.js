import color from "color"

export default (colorString, alpha) => {
  return color(colorString)
    .alpha(alpha)
    .string()
}
