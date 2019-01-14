import deepfind from "./deepfind"

export default (prop, field) => ({ theme }) => {
  if (!field) {
    if (theme.hasOwnProperty(prop)) {
      return theme[prop]
    }
    return null
  }
  if (!deepfind(theme, [prop, field].join("."))) {
    console.warn("Could not find", field, "in", prop)
    return null
  }
  return theme[prop][field]
}
