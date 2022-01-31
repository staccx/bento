import { baseMask } from "./base"
import { formatMoney } from "../../../formatting"
import { MaskOptions } from "./_types"

type CurrencyMask = {
  locale?: string
  currency?: string
} & MaskOptions

export const currencyMask = ({
  locale = "no-NB",
  currency = "NOK",
  ...options
}: CurrencyMask) => {
  const currencyConfig = {
    locale,
    currency
  }

  const config: MaskOptions = {
    ...options,
    format: input =>
      input ? formatMoney(input, { ...currencyConfig, ...options }) : "",
    pattern: /[^0-9]+/gi,
    name: "Currency mask"
  }

  return baseMask(config)
}
