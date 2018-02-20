export default value => {
  const half = parseInt(value.replace(/[^0-9.]+/g, ""), 10) / 2
  return half + "px"
}
