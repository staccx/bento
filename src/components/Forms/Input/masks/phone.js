import { getLogger } from "loglevel"
import { parsePhoneNumber, AsYouType } from "libphonenumber-js"
import { baseMask } from "./base"

export const phoneMask = ({ locale = "NO", ...options }) => {
  const logger = getLogger("input.phone")
  const config = {
    ...options,
    format: input => (input ? new AsYouType(locale).input(input) : ""),
    settle: (value, config) => {
      let phone = null
      try {
        phone = parsePhoneNumber(value, locale)
      } catch (e) {
        logger.debug("Caught error when number is incomplete")
      }
      return {
        value,
        phone: {
          ...(phone && { countryCallingCode: phone.countryCallingCode }),
          isValid: phone ? phone.isValid() : false
        }
      }
    },
    pattern: /[^0-9]+/gi,
    name: "Phone mask"
  }

  return baseMask(config)
}
