import React from "react"
import Input from "./Input"

export default {
  title: "/Components/Input/Component",
  component: Input
}

export const Standard = args => <Input {...args} />
Standard.args = {
  label: "Input"
}

export const Controlled = args => <Input {...args} />
Controlled.args = {
  label: "Input",
  value: "Sphinx of black quartz, judge my vow"
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

export const Custom = args => (
  <Input {...args} blocks={[2, 2, 2]} pattern={/[^a-s]+/gi} />
)
Custom.args = {
  label: "This uses a custom locale [a-s]",
  level: 1,
  placeholder: "aa aa aa",
  mode: "custom"
}

export const Funny = args => <Input {...args} pattern={/[s]+/gi} />
Funny.args = {
  label: "Does not allow the use of the letter 's'",
  level: 1,
  mode: "custom"
}

export const MaskProperty = args => (
  <Input {...args} mask="XX.XX.XX.XX.XXX" delimiter="." />
)
MaskProperty.args = {
  label: "Uses the mask property to define its mask custom",
  level: 1
}
