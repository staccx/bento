export const multiplyPixelValue = (
  value: string,
  multiplier: number,
  unit: string | null = null
) => {
  const multiplied = parseInt(value.replace(/[^0-9.]+/g, ""), 10) * multiplier
  return unit ? multiplied + unit : multiplied
}
