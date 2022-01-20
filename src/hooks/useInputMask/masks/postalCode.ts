import { baseMask } from "./base"

const defaultOptions = {
  blocks: [4],
  maxLength: 4,
  pattern: /[^0-9]+/gi
}

export const postalCodeMask = options => {
  const config = {
    ...defaultOptions,
    ...options
  }

  return baseMask({
    ...config,
    name: "Postal code mask"
  })
}
