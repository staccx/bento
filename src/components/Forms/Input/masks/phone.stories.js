import React from "react"
import Input from "../Input"

export default {
  title: "Components/Input/Masks/Phone",
  component: Input
}

export const Vanilla = args => (
  <Input {...args} mode="phone" onChange={console.log} />
)
Vanilla.args = {}

export const Locale = args => <Input {...args} mode="phone" />
Locale.args = {
  locale: "DK"
}
