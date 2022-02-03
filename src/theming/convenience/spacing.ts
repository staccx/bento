import { getField } from "../utils/getField"

export function spacing(size: string | TemplateStringsArray) {
  return getField(["spacing", size].flat())
}
