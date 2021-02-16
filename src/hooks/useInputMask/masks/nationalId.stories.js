import React from "react"
import Input from "../../../components/Forms/Input/Input"
import { locales } from "../../../locale"

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