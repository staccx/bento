import { getField } from "../utils/getField"

export function grid(grid: string | TemplateStringsArray) {
  return getField(["grid", grid].flat())
}
