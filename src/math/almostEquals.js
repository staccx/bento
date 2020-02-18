export const almostEquals = (value1, value2, precision = 0.0001) =>
  Math.abs(value1 - value2) < precision
