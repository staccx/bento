import { getField } from "../utils/getField"

export function color(color: string | TemplateStringsArray) {
  return getField(["color", color].flat())
}
