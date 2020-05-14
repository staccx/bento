import { formatNumber } from "./number"
import createNumberMask from "./utils/createNumberMask"
import { STYLE } from "./number.constants"

const prefix = ""
const suffix = ""
const includeThousandsSeparator = true
const thousandsSeparatorSymbol = "\u00a0"
const allowDecimal = true
const decimalSymbol = ","
const decimalLimit = 0
const requireDecimal = false
const allowNegative = false
const allowLeadingZeroes = false
const integerLimit = null

export const currencyMaskOptions = {
  prefix,
  suffix,
  includeThousandsSeparator,
  thousandsSeparatorSymbol,
  allowDecimal,
  decimalSymbol,
  decimalLimit,
  requireDecimal,
  allowNegative,
  allowLeadingZeroes,
  integerLimit
}

const format = "%v%s"

const currencyOptions = {
  symbol: suffix,
  precision: decimalLimit,
  thousand: thousandsSeparatorSymbol,
  decimal: decimalSymbol,
  format
}
/**
 * @deprecated Use formatMoney or formatNumber instead
 * @param number
 * @param options
 * @return string
 */
export const formatCurrency = (number, options = {}) => {
  if (typeof number !== "number") {
    throw new TypeError(`Expected a number, got ${typeof number}`)
  }
  const opts = {
    ...currencyOptions,
    ...options,
    ...options,
    suffix: options.symbol ?? null,
    maximumFractionDigits: options.precision ?? 0
  }
  return formatNumber(number, opts)
}

export const formatMoney = (value, options = {}) => {
  return formatNumber(value, {
    locale: "nb-NO",
    suffix: null,
    ...(options.currencyDisplay && { style: STYLE.currency }),
    ...options
  })
}

export const createCurrencyMask = (options = {}) => {
  options = Object.assign({}, currencyMaskOptions, options)
  return createNumberMask(options)
}

export const abbreviateCurrency = value => {
  return formatNumber(value, { notation: "compact", maximumFractionDigits: 0 })
}
