import { formatNumber } from "./number"
import { STYLE } from "./number.constants"

type FormatNumberOptions = Intl.NumberFormatOptions & {
  suffix?: string
  locale?: string
}

export const formatMoney = (value, options?: FormatNumberOptions) => {
  return formatNumber(value, {
    locale: "no",
    ...(options?.currencyDisplay && { style: STYLE.currency }),
    ...options
  })
}

export const abbreviateCurrency = (value: number | bigint) => {
  return formatNumber(value, { notation: "compact", maximumFractionDigits: 0 })
}
