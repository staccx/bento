import { baseMask } from "./base"
import { MaskOptions } from "./_types"

const defaultOptions = {
  blocks: [4],
  maxLength: 4,
  pattern: /[^0-9]+/gi
}

export const postalCodeMask = (options: MaskOptions) => {
  const config = {
    ...defaultOptions,
    ...options
  }

  return baseMask({
    ...config,
    name: "Postal code mask"
  })
}
