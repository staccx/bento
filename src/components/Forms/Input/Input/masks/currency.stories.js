import React from "react"
import Input from "../Input"

export default {
  title: "Components/Input/Masks/Currency",
  component: Input
}

export const Vanilla = args => <Input {...args} mode="currency" />
Vanilla.args = {}

export const Locale = args => <Input {...args} mode="currency" />
Locale.args = {
  locale: "da-DK"
}
