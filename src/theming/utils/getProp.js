import deepfind from "./deepfind"
import get from "lodash.get"
import { themeLogger } from "../theme.logger"

/**
 * Finds a theme value
 * @param field use dot notation e.g font.family.heading
 * @returns {function({theme?: *}): *}
 */
export const getField = (field, fallback = null) => ({ theme }) =>
  get(theme, field, fallback)

/**
 * @deprecated use getField instead
 * @param prop
 * @param field
 * @returns {function({theme?: *}): (*|null)}
 */
export default (prop, field) => ({ theme }) => {
  if (!field) {
    return get(theme, prop, null)
  }
  if (!deepfind(theme, [prop, field].join("."))) {
    themeLogger.warn("Could not find", field, "in", prop)
    return null
  }
  return theme[prop][field]
}
