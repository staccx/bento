import { formatNumber } from "../formatNumber/formatNumber"
import { STYLE } from "../formatNumber/number.constants"

type FormatNumberOptions = Intl.NumberFormatOptions & {
  suffix?: string
  locale?: string
}

export function formatMoney(
  value: number | bigint,
  options?: FormatNumberOptions
) {
  return formatNumber(value, {
    locale: "no",
    ...(options?.currencyDisplay && { style: STYLE.currency }),
    ...options
  })
}
