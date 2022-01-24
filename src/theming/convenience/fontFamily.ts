import { getField } from "../utils/getField"

export function fontFamily(family: string | TemplateStringsArray) {
  return getField(["fontFamily", family].flat())
}

fontFamily.heading = () => fontFamily("heading")
fontFamily.body = () => fontFamily("body")
