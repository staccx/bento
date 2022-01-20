import { baseMask } from "./base"

const defaultOptions = {
  type: "BBAN",
  blocks: [4, 2, 5],
  maxLength: 11,
  pattern: /[^0-9]+/gi
}

export const accountMask = options => {
  const config = {
    ...defaultOptions,
    ...options,
    name: "Account mask"
  }

  return baseMask(config)
}
