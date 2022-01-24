import React from "react"
import { formatMoney, abbreviateCurrency } from "./currency"
import { STYLE } from "./number.constants"
import FunctionStory from "../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "formatting/currency",
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

export const ProofOfConcept = Template.bind({})
ProofOfConcept.args = {
  value: 1e6
}

export const Default = args => (
  <div>
    <p>
      This is the standard formatMoney with no options, as standard, formatMoney
      adds a space as thousand separator
    </p>
    {formatMoney(args.value)}
  </div>
)

Default.args = {
  value: 1337
}

export const NorwegianFormat = args => (
  <div>{formatMoney(args.value, { locale: args.locale })}</div>
)

NorwegianFormat.args = {
  value: 1337,
  locale: "nb-NO"
}

export const KrSuffix = args => (
  <div>
    <p>
      Here is an example of how we generally would format a norwegian currency
      string. Here we use locale from options, to format the currency to the
      norwegian standard
    </p>
    {formatMoney(args.value, { locale: args.locale, suffix: args.suffix })}
  </div>
)

KrSuffix.args = {
  value: 1337,
  locale: "nb-NO",
  suffix: "kr"
}

export const EnglishFormat = args => (
  <div>
    <p>
      Here we use locale to give the currency an english standard, it also takes
      style, to format how decimals are displayed
    </p>
    {formatMoney(args.value, {
      locale: args.locale,
      suffix: args.suffix,
      style: args.style
    })}
  </div>
)

EnglishFormat.args = {
  value: 1337.12,
  locale: "en",
  suffix: "NOK",
  style: STYLE.decimal
}

export const Style = args => (
  <div>
    <p>
      Here we use locale to give the currency an english standard, it also takes
      style, to format how decimals are displayed Style currency gives a prefix
    </p>
    {formatMoney(args.value, {
      locale: args.locale,
      suffix: args.suffix,
      style: args.style
    })}
  </div>
)

Style.args = {
  value: 1337,
  locale: "nb-NO",
  suffix: ",-",
  style: STYLE.currency
}
