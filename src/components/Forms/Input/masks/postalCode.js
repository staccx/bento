import { baseMask } from "./base"
import { locales } from "../../../../locale"

export const postalCodeMask = ({ locale = locales.Norway, ...options }) => {
  const config = {
    ...options,
    ...(locale?.postalCode
      ? { ...locale.postalCode }
      : { ...locales.Norway.postalCode })
  }

  return baseMask({
    ...config,
    name: "Postal code mask"
  })
}
