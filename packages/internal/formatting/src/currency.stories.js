import React from "react"
import { storiesOf } from "@storybook/react"
import { formatCurrency } from "./currency"
import { Text as CurrencyText } from "./__storyComponents"

storiesOf("Functions/Formatting/Currency", module)
  .add("No options", () => <CurrencyText>{formatCurrency(1000)}</CurrencyText>)
  .add("Thousand separator", () => (
    <CurrencyText>{formatCurrency(1000, { thousand: "." })}</CurrencyText>
  ))
  .add("Currency symbol", () => (
    <CurrencyText>{formatCurrency(1000, { symbol: "$" })}</CurrencyText>
  ))
  .add("Format", () => (
    <CurrencyText>
      {formatCurrency(1000, { symbol: "$", format: "$s  $v" })}
    </CurrencyText>
  ))
  .add("Norwegian", () => (
    <CurrencyText>
      {formatCurrency(100000, { symbol: "kr", format: "$s  $v", suffix: ",-" })}
    </CurrencyText>
  ))
