export default (min, max, value) => {
  return (value - min) / (max - min)
}