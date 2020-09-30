import React from "react"
import PhoneInput from "./PhoneInput"

export default {
  title: "Components/Forms/Input/PhoneInput",
  component: PhoneInput
}

export const Standard = args => <PhoneInput {...args} />
Standard.args = {
  id: "123898g"
}

export const StandardWithAreacode = args => <PhoneInput {...args} />
StandardWithAreacode.args = {
  id: "19249gj",
  showCountryCode: true
}
