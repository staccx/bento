import React from "react"
import Input from "./Input"

export default {
  title: "New/Components/Forms/Input/Input/New",
  component: Input
}

export const Standard = args => <Input {...args} />
Standard.args = {
  label: "Input"
}

export const Placeholder = args => <Input {...args} />
Placeholder.args = {
  label: "Secret question",
  placeholder: "Your favorite animal"
}

export const Disabled = args => <Input {...args} />
Disabled.args = {
  label: "Input",
  disabled: true
}

export const Account = args => <Input {...args} mode="account" />
Account.args = {
  label: "Account",
  level: 5,
  placeholder: "xxxx-xx-xxxxx"
}

export const AccountDanish = args => (
  <Input {...args} mode="account" locale="DK" />
)
AccountDanish.args = {
  label: "Account",
  level: 5,
  placeholder: "xxxx-xxxxxxxxx"
}

export const Custom = args => (
  <Input {...args} blocks={[2, 2, 2]} pattern={/[^a-s]+/gi} />
)
Custom.args = {
  label: "This uses a custom locale [a-s]",
  level: 5,
  placeholder: "aa aa aa"
}

export const Funny = args => <Input {...args} pattern={/[s]+/gi} />
Funny.args = {
  label: "Does not allow the use of the letter 's'",
  level: 5
}

export const MaskProperty = args => <Input {...args} mask="XX.XX.XX.XX.XXX" />
MaskProperty.args = {
  label: "Uses the mask property to define its mask custom",
  level: 5
}
