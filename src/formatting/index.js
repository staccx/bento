import {
  formatCurrency,
  createCurrencyMask,
  currencyMaskOptions,
  abbreviateCurrency
} from "./currency"
import { formatDateDistance, formatDateRelative, formatDate } from "./date"
import { default as removeWhitespace } from "./removeWhitespace"
import { default as formatName } from "./formatName"
import { default as truncate } from "./truncate"
import { default as maskFormat } from "./maskFormat"
import { default as dashIt } from "./dashIt"

/**
 * @deprecated use maskFormat instead
 * @type {Function}
 */
const formatPhone = maskFormat

export {
  formatCurrency,
  createCurrencyMask,
  currencyMaskOptions,
  abbreviateCurrency,
  formatDateRelative,
  formatDateDistance,
  formatDate,
  removeWhitespace,
  formatName,
  maskFormat,
  formatPhone,
  truncate,
  dashIt
}
