import React from "react"
import Input from "../../../components/Forms/Input/Input"
import { locales } from "../../../locale"
import { useDelayedValue } from "./_shared.utils"

export default {
  title: "Components/Input/Masks/National Id",
  component: Input
}

export const Vanilla = args => <Input {...args} mode="nationalid" />
Vanilla.args = {}

export const Locale = args => <Input {...args} mode="nationalid" />
Locale.args = {
  locale: locales.Finland
}

export const DelayedControlled = args => {
  const value = useDelayedValue("01065100394")

  return (
    <Input id={"delayed_national"} mode="nationalid" {...args} value={value} />
  )
}

DelayedControlled.args = {}
