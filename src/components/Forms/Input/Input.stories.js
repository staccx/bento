import React from "react"
import Input from "./Input"

export default {
  title: "new/Forms/Input/Input",
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
