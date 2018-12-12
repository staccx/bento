import React from "react"
import { Input, CheckBox, PhoneInput } from "@staccx/base"

const InputWidget = ({ onChange, ...rest }) => (
  <Input {...rest} onChange={e => onChange(e.target.value)} />
)

const PhoneWidget = ({ onChange, id, ...rest }) => {
  const { options, ...props } = rest
  console.log(options, props)
  return (
    <PhoneInput name={id} {...props} onChange={e => onChange(e.target.value)} />
  )
}

const CheckboxWidget = ({ onChange, value, label, ...rest }) => (
  <CheckBox
    {...rest}
    defaultChecked={value}
    onChange={e => {
      console.log("Change", e)
      onChange(e.target.checked)
    }}
  >
    {label}
  </CheckBox>
)

export default {
  CheckboxWidget,
  TextWidget: InputWidget,
  phone: PhoneWidget,
  email: InputWidget
}
