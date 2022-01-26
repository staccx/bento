import { baseMask } from "./base"
import { MaskOptions } from "./_types"

const defaultOptions = {
  blocks: [3, 2, 3],
  maxLength: 8,
  pattern: /[^0-9]+/gi
}

export const phoneMask = (options: MaskOptions) => {
  const config = {
    ...defaultOptions,
    ...options,
    name: "Phone mask"
  }

  return baseMask(config)
}
