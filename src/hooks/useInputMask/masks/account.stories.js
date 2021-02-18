import React from "react"
import Input from "../../../components/Forms/Input/Input"
import { locales, LocaleProvider } from "../../../locale"
import { useDelayedValue } from "./_shared.utils"

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

export const DelayedController = args => {
  const value = useDelayedValue("34951515827")

  return <Input id={"delayed_account"} mode="account" {...args} value={value} />
}

DelayedController.args = {}
