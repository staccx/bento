import { baseMask } from "./base"
import { MaskOptions } from "./_types"

const defaultOptions = {
  blocks: [6, 5],
  pattern: /[^0-9]+/gi
}

export const nationalIdMask = (options: MaskOptions) => {
  const config = {
    ...defaultOptions,
    ...options,
    name: "NationalId mask"
  }

  return baseMask(config)
}
