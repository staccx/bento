import { formatNumber } from "./number"
import { STYLE } from "./number.constants"

export const formatMoney = (value, options = {}) => {
  console.debug("formatMoney", value, options)
  return formatNumber(value, {
    locale: "no",
    suffix: null,
    ...(options.currencyDisplay && { style: STYLE.currency }),
    ...options
  })
}

export const abbreviateCurrency = value => {
  return formatNumber(value, { notation: "compact", maximumFractionDigits: 0 })
}
