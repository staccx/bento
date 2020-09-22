import { baseMask } from "./base"

const locales = {
  NO: {
    type: "BBAN",
    blocks: [4, 2, 5],
    maxLength: 11,
    pattern: /[^0-9]+/gi,
    replaceWhitespace: true
  },
  DK: {
    type: "BBAN",
    blocks: [4, 9],
    maxLength: 13,
    pattern: /[^0-9]+/gi,
    replaceWhitespace: true
  },
  SE: {
    type: "BBAN",
    blocks: [4, 2, 4, 1],
    maxLength: 19,
    pattern: /[^0-9]+/gi,
    replaceWhitespace: true
  },
  FI: {
    type: "IBAN",
    blocks: [4, 4, 4, 2],
    maxLength: 14,
    prefix: "FI",
    pattern: /[^0-9]+/gi,
    replaceWhitespace: true
  }
}

export const accountMask = {
  createMask: ({ locale = "NO", ...options }) => {
    let config = locales.hasOwnProperty(locale) ? locales[locale] : {}
    config = {
      ...config,
      ...options
    }

    if (!config.blocks) {
      throw new Error("No blocks defined in config")
    }

    return baseMask.createMask(config)
  }
}
