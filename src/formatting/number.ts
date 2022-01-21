// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/NumberFormat
import { STYLE, UNIT_DISPLAY, CURRENCY_DISPLAY } from "./number.constants"

type NumberFormatOptions = Intl.NumberFormatOptions & {
  locale?: string
  suffix?: string
}

const defaults: NumberFormatOptions = {
  style: STYLE.decimal,
  currencyDisplay: CURRENCY_DISPLAY.symbol,
  suffix: undefined,
  unitDisplay: "short",
  currency: "NOK", // http://www.currency-iso.org/en/home/tables/table-a1.html,
  useGrouping: true,
  locale: "no",
  unit: undefined,
  minimumFractionDigits: 0
}

export function formatNumber(
  value: number | bigint,
  opts?: NumberFormatOptions
): string {
  const options = {
    ...defaults,
    ...opts
  }
  const { locale } = options
  try {
    const formatter = new Intl.NumberFormat(locale, options)
    const formattedValue = formatter.format(value)
    return `${formattedValue}${options.suffix ?? ""}`
  } catch (e) {
    if (e instanceof Error) console.error(e.message)
    return value.toLocaleString(locale)
  }
}
