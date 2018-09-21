// import getLocaleOptions from "./_getLocaleOptions"
import { formatCurrency } from "@staccx/formatting"
import _createFormatter from "./_createFormatter"

const regex = new RegExp(/{currency\(\s*(\w+)\)}/)

export default (value, language, options, data = {}) => {
  return _createFormatter({
    name: "currency",
    options,
    language,
    data,
    value,
    regex,
    formatFunction: formatCurrency
  })
}
