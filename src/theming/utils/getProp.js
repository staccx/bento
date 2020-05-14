import deepfind from "./deepfind"
import { themeLogger } from "../theme.logger"

export default (prop, field) => ({ theme }) => {
  if (!field) {
    if (theme.hasOwnProperty(prop)) {
      return theme[prop]
    }
    return null
  }
  if (!deepfind(theme, [prop, field].join("."))) {
    themeLogger.warn("Could not find", field, "in", prop)
    return null
  }
  return theme[prop][field]
}
