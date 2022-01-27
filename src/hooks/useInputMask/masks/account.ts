import { baseMask } from "./base"
import type { MaskOptions } from "./_types"

const defaultOptions = {
  type: "BBAN",
  blocks: [4, 2, 5],
  maxLength: 11,
  pattern: /[^0-9]+/gi
}

export function accountMask(options: MaskOptions) {
  const config = {
    ...defaultOptions,
    ...options,
    name: "Account mask"
  }

  return baseMask(config)
}
