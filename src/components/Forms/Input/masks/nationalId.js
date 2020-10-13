import { baseMask } from "./base"

const locales = {
  "no-NB": { blocks: [6, 5], pattern: /[^0-9]+/gi },
  "da-DK": { blocks: [6, 4], pattern: /[^0-9]+/gi }
}

export const nationalIdMask = ({ locale = "no-NB", ...options }) => {
  let config = locales.hasOwnProperty(locale) ? locales[locale] : {}
  config = {
    ...config,
    ...options,
    ...(locale?.nationalId && { ...locale.nationalId }),
    name: "NationalId mask"
  }

  return baseMask(config)
}
