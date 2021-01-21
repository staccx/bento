import { baseMask } from "./base"
import { locales } from "../../../../locale"

export const accountMask = ({ locale = locales.Norway, ...options }) => {
  const config = {
    ...options,
    ...(locale?.account
      ? { ...locale.account }
      : { ...locales.Norway.account }),
    name: "Account mask"
  }

  return baseMask(config)
}
