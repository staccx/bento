import React from "react"
import Input from "../../../components/Forms/Input/Input"
import { locales, LocaleProvider } from "../../../locale"

export default {
  title: "Components/Input/Masks/Account",
  component: Input
}

export const Vanilla = args => <Input {...args} mode="account" />
Vanilla.args = {
  label: "Account input with nothing fancy"
}

export const Locale = args => <Input {...args} mode="account" />
Locale.args = {
  label: "Locale set explistely (Danish)",
  locale: locales.Denmark
}
