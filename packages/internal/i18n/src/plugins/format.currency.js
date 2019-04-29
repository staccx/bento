// import getLocaleOptions from "./_getLocaleOptions"
import { formatCurrency as formatFunction } from "@staccx/formatting"
import _createFormatter from "./_createFormatter"

const regex = new RegExp(/{currency\(\s*(\w+)\)}/, "g")

const formatCurrency = (value, language, options, data = {}) => {
  return _createFormatter({
    name: "currency",
    options,
    language,
    data,
    value,
    regex,
    valueParser: val => parseInt(val, 10),
    formatFunction
  })
}

export default formatCurrency
