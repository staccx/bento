import { formatNumber } from "../formatNumber/formatNumber"

type FormatNumberOptions = Intl.NumberFormatOptions & {
  suffix?: string
  locale?: string
}
export function abbreviateCurrency(
  value: number | bigint,
  options?: FormatNumberOptions
) {
  return formatNumber(value, {
    notation: "compact",
    maximumFractionDigits: 0,
    ...options
  })
}
