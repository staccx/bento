export default a => {
  if (a > 1) {
    a /= 100 // To be able to pass percentage values
  }
  const alpha = Math.round(a * 255)
  return (alpha + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase()
}
