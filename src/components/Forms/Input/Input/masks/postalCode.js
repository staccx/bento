import { baseMask } from "./base"

const locales = {
  NO: {
    blocks: [4],
    maxLength: 4,
    pattern: /[^0-9]+/gi
  },
  DK: {
    blocks: [4],
    maxLength: 4,
    pattern: /[^0-9]+/gi
  },
  SE: {
    blocks: [3, 2],
    maxLength: 5,
    pattern: /[^0-9]+/gi
  },
  FI: {
    blocks: [5],
    maxLength: 5,
    pattern: /[^0-9]+/gi
  }
}

export const postalCodeMask = ({ locale = "NO", ...options }) => {
  const config = {
    ...options,
    ...(locales.hasOwnProperty(locale) ? locales[locale] : {})
  }

  return baseMask({
    ...config,
    name: "Postal code mask"
  })
}
