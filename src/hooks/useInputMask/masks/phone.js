import { baseMask } from "./base"

const defaultOptions = {
  blocks: [3, 2, 3],
  maxLength: 8,
  pattern: /[^0-9]+/gi
}

export const phoneMask = options => {
  const config = {
    ...defaultOptions,
    ...options,
    name: "Phone mask"
  }

  return baseMask(config)
}
