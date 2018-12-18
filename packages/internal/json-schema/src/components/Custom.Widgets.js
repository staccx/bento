import React from "react"
import { Input, CheckBox, PhoneInput } from "@staccx/base"
import SelectWidget from "./Custom.Widgets.Select"
import RadioWidget from "./Custom.Widgets.Radio"
import Citizenship from "./Custom.Widgets.Citizenship"

const InputWidget = ({
  onChange,
  schema,
  autofocus,
  disabled,
  placeholder,
  required,
  value,
  readonly,
  options,
  schema: sch,
  ...rest
}) => (
  <Input
    autoFocus={autofocus}
    disabled={disabled}
    placeholder={placeholder}
    helpText={schema.description}
    required={required}
    defaultValue={sch.default}
    onChange={e => onChange(e.target.value)}
    readOnly={readonly}
    {...rest}
  />
)

const PhoneWidget = ({
  onChange,
  schema,
  autofocus,
  disabled,
  placeholder,
  required,
  value,
  readonly,
  options,
  ...rest
}) => (
  <PhoneInput
    autoFocus={autofocus}
    disabled={disabled}
    placeholder={placeholder}
    helpText={schema.description}
    required={required}
    defaultValue={value}
    onChange={e => onChange(e.target.value)}
    readOnly={readonly}
    {...rest}
  />
)

const CheckboxWidget = ({
  onChange,
  schema,
  autofocus,
  disabled,
  placeholder,
  required,
  value,
  readonly,
  options,
  label,
  ...rest
}) => (
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
  textarea: InputWidget,
  phone: PhoneWidget,
  email: InputWidget,
  geo: () => <div>test</div>,
  citizenship: Citizenship,
  RadioWidget,
  SelectWidget
}
