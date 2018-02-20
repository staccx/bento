export default (value, multiplier) => {
  const multiplied = parseInt(value.replace(/[^0-9.]+/g, ""), 10) * multiplier
  return multiplied + "px"
}
