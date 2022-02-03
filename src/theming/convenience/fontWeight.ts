import { getField } from "../utils/getField"

export function fontWeight(weight: string | TemplateStringsArray) {
  return getField(["fontWeight", weight].flat())
}
fontWeight.normal = () => fontWeight("normal")
fontWeight.bold = () => fontWeight("bold")
fontWeight.light = () => fontWeight("light")
