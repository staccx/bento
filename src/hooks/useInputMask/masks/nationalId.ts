import { baseMask } from "./base"

const defaultOptions = {
  blocks: [6, 5],
  pattern: /[^0-9]+/gi
}

export const nationalIdMask = options => {
  const config = {
    ...defaultOptions,
    ...options,
    name: "NationalId mask"
  }

  return baseMask(config)
}
