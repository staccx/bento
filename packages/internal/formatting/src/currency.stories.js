import React from "react"
import { storiesOf } from "@storybook/react"
import { formatCurrency } from "./currency"
import { Text as CurrencyText } from "./__storyComponents"
import docs from "./formatCurrency.md"

storiesOf("Functions/Formatting/Currency", module)
  .add(
    "No options",
    () => {
      return <CurrencyText>{formatCurrency(1000)}</CurrencyText>
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Thousand separator",
    () => {
      return (
        <CurrencyText>{formatCurrency(1000, { thousand: "." })}</CurrencyText>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Currency symbol",
    () => {
      return (
        <CurrencyText>{formatCurrency(1000, { symbol: "$" })}</CurrencyText>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Format",
    () => {
      return (
        <CurrencyText>
          {formatCurrency(1000, { symbol: "$", format: "$s  $v" })}
        </CurrencyText>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Norwegian",
    () => {
      return (
        <CurrencyText>
          {formatCurrency(100000, {
            symbol: "kr",
            format: "$s  $v",
            suffix: ",-"
          })}
        </CurrencyText>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
