import { baseMask } from "./base"
import { formatMoney } from "../../../formatting"

export const currencyMask = ({
  locale = "no-NB",
  currency = "NOK",
  ...options
}) => {
  const currencyConfig = {
    locale: locale?.currency?.locale ?? locale,
    currency: locale?.currency?.name ?? currency
  }
  const parts = new Intl.NumberFormat(locale)
  const config = {
    ...options,
    prepare: (input, config) => {
      if (!input) {
        return ""
      }

      const p = parts.formatToParts(parseFloat(input))
      const separator = p?.find(({ type }) => type === "group")?.value

      const replaceSeparator = new RegExp(separator ?? "/,/", "g")
      let index = 0
      const dots = (input?.toString() ?? "").replace(replaceSeparator, item =>
        !index++ ? "." : ""
      )
      index = 0

      const value = dots.replace(/\./g, item => (!index++ ? item : ""))

      const delimited = config.delimiter
        ? value.replace(config.delimiter, "")
        : value

      const patterned = config.pattern
        ? delimited.replace(config.pattern, "")
        : delimited
      return patterned
    },
    format: (input, _, lastValue) => {
      if (!input) {
        return ""
      }
      console.log("Last value", lastValue)
      console.log("input", input)
      const numeric = parseFloat(input)
      if (input.endsWith(".")) {
        return `${formatMoney(numeric, {
          ...currencyConfig,
          ...options
        })},`
      }

      return formatMoney(numeric, {
        ...currencyConfig,
        ...options
      })
    },
    pattern: /[^0-9.,]+/gi,
    name: "Currency mask"
  }

  return baseMask(config)
}
