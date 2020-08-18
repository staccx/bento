import React from "react"
import CreditCardInput from "./CreditCardInput"

export default {
  title: "new/Forms/Input/CreditCardInput",
  component: CreditCardInput
}

export const Standard = args => <CreditCardInput {...args} />
Standard.args = {
  label: "CreditCardInput"
}
