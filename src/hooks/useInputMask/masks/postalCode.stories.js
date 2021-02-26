import React from "react"
import Input from "../../../components/Forms/Input/Input"

export default {
  title: "Components/Input/Masks/Postal Code",
  component: Input
}

export const Vanilla = args => <Input {...args} mode="postalcode" />
Vanilla.args = {}

export const Locale = args => <Input {...args} mode="postalcode" />
Locale.args = {
  locale: "DK"
}
