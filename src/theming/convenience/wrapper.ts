import { getField } from "../utils/getField"

export function wrapper(size: string | TemplateStringsArray) {
  return getField(["wrapper", size].flat())
}

wrapper.small = () => wrapper("small")
wrapper.medium = () => wrapper("medium")
wrapper.large = () => wrapper("large")
wrapper.breakout = () => wrapper("breakout")
