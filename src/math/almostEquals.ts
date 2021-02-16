export const almostEquals = (
  value1: number,
  value2: number,
  precision: number = 0.0001
): boolean => Math.abs(value1 - value2) < precision
