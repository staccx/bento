// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/NumberFormat
import { STYLE, UNIT_DISPLAY, CURRENCY_DISPLAY } from "./number.constants"

const defaults = {
  style: STYLE.decimal,
  currencyDisplay: CURRENCY_DISPLAY.symbol,
  suffix: null,
  unitDisplay: UNIT_DISPLAY.short,
  currency: "NOK", // http://www.currency-iso.org/en/home/tables/table-a1.html,
  useGrouping: true,
  locale: "nb-no",
  unit: null,
  minimumFractionDigits: 0
}

export const formatNumber = (value, opts) => {
  const options = {
    ...defaults,
    ...opts
  }
  const { locale } = options
  const formatter = new Intl.NumberFormat(locale, options)
  const formattedValue = formatter.format(value)
  return `${formattedValue}${options.suffix ?? ""}`
}
