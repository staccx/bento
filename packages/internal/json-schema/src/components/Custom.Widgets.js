import React from "react"
import { Input, CheckBox, PhoneInput, theming } from "@staccx/base"
import SelectWidget from "./Custom.Widgets.Select"
import RadioWidget from "./Custom.Widgets.Radio"

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
  help,
  ...rest
}) => {
  // const { help } = sch
  return (
    <Input
      autoFocus={autofocus}
      disabled={disabled}
      placeholder={placeholder}
      helpText={help}
      required={required}
      defaultValue={sch.default}
      onChange={e => onChange(e.target.value)}
      readOnly={readonly}
      variant="schemaInput"
      {...rest}
    />
  )
}

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
}) => {
  return (
    <PhoneInput
      helpText={schema.help}
      autoFocus={autofocus}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      defaultValue={value}
      onChange={e => onChange(e.target.value)}
      readOnly={readonly}
      variant={["schemaInput", "shemaInputPhone"]}
      {...rest}
    />
  )
}

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
      onChange(e.target.checked)
    }}
    variant={[theming.VARIANT_DEFAULT]}
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
  RadioWidget,
  SelectWidget
}
