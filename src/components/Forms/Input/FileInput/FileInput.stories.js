import React from "react"
import FileInput from "./FileInput"

export default {
  title: "new/Forms/Input/FileInput",
  component: FileInput
}

export const Standard = args => <FileInput {...args}>Last opp</FileInput>
Standard.args = {
  id: "9852145"
}

export const Disabled = args => <FileInput {...args}>Last opp</FileInput>
Disabled.args = {
  id: "2198389f",
  disabled: true
}
