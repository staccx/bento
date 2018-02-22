import accounting from "accounting"
const createNumberMask = require("text-mask-addons/dist/createNumberMask").default

const prefix = ""
const suffix = " NOK"
const includeThousandsSeparator = true
const thousandsSeparatorSymbol = " "
const allowDecimal = true
const decimalSymbol = "."
const decimalLimit = 2
const requireDecimal = false
const allowNegative = false
const allowLeadingZeroes = false
const integerLimit = null

const currencyMaskOptions = {
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

const format = "%v %s"

const currencyOptions = {
  symbol: suffix,
  precision: decimalLimit,
  thousand: thousandsSeparatorSymbol,
  decimal: decimalSymbol,
  format
}

export const formatCurrency = (number, options = {}) => {
  if (typeof number !== "number") {
    throw new TypeError(`Expected a number, got ${typeof number}`)
  }
  const opts = { ...currencyOptions, ...options }
  const { symbol, precision, thousand, decimal, format } = opts
  return accounting.formatMoney(
    number,
    symbol,
    precision,
    thousand,
    decimal,
    format
  )
}

export const createCurrencyMask = (options = {}) => {
  console.log(options)
  options = Object.assign({},currencyMaskOptions, options)
  return createNumberMask(options)
}
