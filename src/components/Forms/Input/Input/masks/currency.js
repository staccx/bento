import { baseMask } from "./base"
import { formatMoney } from "formatting"

export const currencyMask = ({
  locale = "no-NB",
  currency = "NOK",
  ...options
}) => {
  const config = {
    ...options,
    format: input =>
      input ? formatMoney(input, { locale, currency, ...options }) : "",
    pattern: /[^0-9]+/gi,
    name: "Currency mask"
  }

  return baseMask(config)
}
