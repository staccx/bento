import { baseMask } from "./base"

export const accountMask = ({ locale, ...options }) => {
  const config = {
    ...options,
    ...(locale?.account && { ...locale.account }),
    name: "Account mask"
  }

  return baseMask(config)
}
