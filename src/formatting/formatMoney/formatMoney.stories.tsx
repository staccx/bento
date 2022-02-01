import React from "react"
import { formatMoney } from "./formatMoney"
import { STYLE } from "../formatNumber/number.constants"
import { ComponentStory } from "@storybook/react"
import FunctionStory from "../../_storyhelpers/FunctionStory"

export default {
  title: "formatting/Format Money",
  component: formatMoney,
  parameters: {
    jest: ["currency.test.ts"]
  },
  argTypes: {
    locale: {
      options: ["no", "da", "en", "jpn"],
      control: { type: "select" }
    },
    currency: {
      options: ["NOK", "DKK", "EUR", "JPY", "USD"],
      control: { type: "select" }
    },
    minimumFractionDigits: {
      control: { type: "range", min: 0, max: 3, step: 1 }
    },
    currencyDisplay: {
      options: ["symbol", "code", "name"],
      control: { type: "select" }
    }
  }
}

const Template: ComponentStory<any> = ({ value, ...options }) => {
  const output = formatMoney(value, options)

  return (
    <FunctionStory
      name={"formatMoney"}
      input={{ value, options }}
      output={output}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  value: 1_000_000
}

export const Example = ({ value }) => (
  <div>
    <p>
      This is the standard formatMoney with no options, as standard, formatMoney
      adds a space as thousand separator
    </p>
    {formatMoney(value)}
  </div>
)

Example.args = {
  value: 1337
}

export const NorwegianFormat = ({ value, locale }) => (
  <div>{formatMoney(value, { locale })}</div>
)

NorwegianFormat.args = {
  value: 1337,
  locale: "nb-NO"
}

export const KrSuffix = ({ value, locale, suffix }) => (
  <div>
    <p>
      Here is an example of how we generally would format a norwegian currency
      string. Here we use locale from options, to format the currency to the
      norwegian standard
    </p>
    {formatMoney(value, { locale, suffix })}
  </div>
)

KrSuffix.args = {
  value: 1337,
  locale: "nb-NO",
  suffix: "kr"
}

export const EnglishFormat = ({ value, locale, suffix, style }) => (
  <div>
    <p>
      Here we use locale to give the currency an english standard, it also takes
      style, to format how decimals are displayed
    </p>
    {formatMoney(value, {
      locale,
      suffix,
      style
    })}
  </div>
)

EnglishFormat.args = {
  value: 1337.12,
  locale: "en",
  suffix: "NOK",
  style: STYLE.decimal
}

export const Style = ({ value, locale, suffix, style }) => (
  <div>
    <p>
      Here we use locale to give the currency an english standard, it also takes
      style, to format how decimals are displayed Style currency gives a prefix
    </p>
    {formatMoney(value, {
      locale,
      suffix,
      style
    })}
  </div>
)

Style.args = {
  value: 1337,
  locale: "nb-NO",
  suffix: ",-",
  style: STYLE.currency
}
