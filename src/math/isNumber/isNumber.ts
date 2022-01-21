export const isNumber = (n: any): boolean =>
  !isNaN(parseFloat(n)) && isFinite(n)
