import deepfind from "./deepfind"
import get from "lodash.get"

/**
 * Finds a theme value
 * @param field use dot notation e.g font.family.heading
 * @returns {function({theme?: *}): *}
 */
export const getField =
  (field, fallback: string | null = null) =>
  ({ theme }) =>
    get(theme, field, fallback)

/**
 * @deprecated use getField instead
 * @param prop
 * @param field
 * @returns {function({theme?: *}): (*|null)}
 */
export default (prop, field?: string) =>
  ({ theme }) => {
    if (!field) {
      return get(theme, prop, null)
    }
    if (!deepfind(theme, [prop, field].join("."))) {
      console.warn("Could not find", field, "in", prop)
      return null
    }
    return theme[prop][field]
  }
