import loglevel from "loglevel"
import { formatNumber } from "./number"
import { STYLE } from "./number.constants"

const logger = loglevel.getLogger("formatting")

export const formatMoney = (value, options = {}) => {
  logger.debug("formatMoney", value, options)
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
