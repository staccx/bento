export const inverseLerp = (
  min: number,
  max: number,
  value: number
): number => {
  return (value - min) / (max - min)
}
