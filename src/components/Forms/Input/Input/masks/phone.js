import { AsYouType } from "libphonenumber-js"
import { baseMask } from "./base"

export const phoneMask = ({ locale = "NO", ...options }) => {
  const config = {
    ...options,
    format: input => (input ? new AsYouType(locale).input(input) : ""),
    pattern: /[^0-9]+/gi,
    name: "Phone mask"
  }

  return baseMask(config)
}
