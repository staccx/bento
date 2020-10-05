import React from "react"
import Input from "../Input"
import { countries, Provider } from "../../../../i18n"

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
  label: "Locale set explistely",
  locale: "DK"
}

export const i18nEnabled = args => (
  <Provider language={countries.Denmark}>
    <Input {...args} mode="account" />
  </Provider>
)
i18nEnabled.args = {
  label: "Locale derived from context"
}
