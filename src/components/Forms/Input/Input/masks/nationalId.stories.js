import React from "react"
import Input from "../Input"

export default {
  title: "Components/Input/Masks/National Id",
  component: Input
}

export const Vanilla = args => <Input {...args} mode="nationalid" />
Vanilla.args = {}

export const Locale = args => <Input {...args} mode="nationalid" />
Locale.args = {
  locale: "da-DK"
}
