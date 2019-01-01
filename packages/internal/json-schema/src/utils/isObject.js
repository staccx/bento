export default thing => {
  return typeof thing === "object" && thing !== null && !Array.isArray(thing)
}
