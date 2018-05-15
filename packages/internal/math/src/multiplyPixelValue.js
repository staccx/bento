export default (value, multiplier) => {
  const multiplied = parseInt(value.replace(/[^0-9.]+/g, ""), 10) * multiplier
  return multiplied + "px" // TODO: Should use return value? unit could be suffixed where used?
}
