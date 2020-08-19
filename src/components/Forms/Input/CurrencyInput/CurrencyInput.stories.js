import React from "react"
import CurrencyInput from "./CurrencyInput"

export default {
  title: "New/Components/Forms/Input/CurrencyInput",
  component: CurrencyInput
}

export const Standard = args => <CurrencyInput {...args} />
Standard.args = {
  label: "CurrencyInput"
}
