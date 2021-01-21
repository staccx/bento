import { baseMask } from "./base"
import { locales } from "../../../../locale"

export const nationalIdMask = ({ locale = locales.Norway, ...options }) => {
  const config = {
    ...options,
    ...(locale?.nationalId
      ? { ...locale.nationalId }
      : { ...locales.Norway.nationalId }),
    name: "NationalId mask"
  }

  return baseMask(config)
}
