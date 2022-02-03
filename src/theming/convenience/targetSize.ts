import { getField } from "../utils/getField"

export function targetSize(size: string | TemplateStringsArray = "normal") {
  return getField(["targetSize", size].flat())
}
targetSize.small = () => targetSize("small")
targetSize.normal = () => targetSize("normal")
