export const multiplyPixelValue = (value, multiplier, unit = null) => {
  const multiplied = parseInt(value.replace(/[^0-9.]+/g, ""), 10) * multiplier
  return unit ? multiplied + unit : multiplied
}
