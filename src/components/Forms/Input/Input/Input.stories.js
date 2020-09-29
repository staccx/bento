import React from "react"
import Input from "./Input"

export default {
  title: "Components/Input/",
  component: Input
}

export const Standard = args => <Input {...args} />
Standard.args = {
  label: "Input"
}

export const Controlled = args => <Input {...args} />
Controlled.args = {
  label: "Input",
  value: "Sphinx of black quartz, judge my vow"
}

export const Placeholder = args => <Input {...args} />
Placeholder.args = {
  label: "Secret question",
  placeholder: "Your favorite animal"
}

export const Disabled = args => <Input {...args} />
Disabled.args = {
  label: "Input",
  disabled: true
}

export const Custom = args => (
  <Input {...args} blocks={[2, 2, 2]} pattern={/[^a-s]+/gi} />
)
Custom.args = {
  label: "This uses a custom locale [a-s]",
  level: 1,
  placeholder: "aa aa aa"
}

export const Funny = args => <Input {...args} pattern={/[s]+/gi} />
Funny.args = {
  label: "Does not allow the use of the letter 's'",
  level: 1
}

export const MaskProperty = args => (
  <Input {...args} mask="XX.XX.XX.XX.XXX" delimiter="." />
)
MaskProperty.args = {
  label: "Uses the mask property to define its mask custom",
  level: 1
}

export const CreditCard = args => <Input {...args} mode="creditcard" />
CreditCard.args = {
  label: "Vanilla credit card",
  level: 1
}

export const CurrencyDefaultLocale = args => <Input {...args} mode="currency" />
CurrencyDefaultLocale.args = {
  label: "Currency formatting default locale",
  level: 1
}

export const CurrencyLocaleSet = args => <Input {...args} mode="currency" />
CurrencyLocaleSet.args = {
  label: "Currency formatting",
  level: 1,
  locale: "en-US"
}

export const CurrencyCustomProps = args => <Input {...args} mode="currency" />
CurrencyCustomProps.args = {
  label: "Set currencydisplay to name",
  level: 1,
  locale: "en-US",
  currencyDisplay: "name",
  currency: "USD"
}
