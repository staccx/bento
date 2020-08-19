import React from "react"
import CheckBox from "./CheckBox"

export default {
  title: "New/Components/Forms/CheckBox",
  component: CheckBox
}

export const Checkbox = args => <CheckBox {...args}> Checkbox </CheckBox>
Checkbox.args = { id: "ID" }

export const CheckboxDisabled = args => (
  <CheckBox {...args}> Checkbox </CheckBox>
)
CheckboxDisabled.args = { id: "ID1", disabled: true }

export const CheckboxDefaultChecked = args => (
  <CheckBox {...args}> Checkbox </CheckBox>
)
CheckboxDefaultChecked.args = { id: "ID2", defaultChecked: true }

export const CheckboxConsoleLog = args => (
  <CheckBox {...args}> Checkbox </CheckBox>
)
CheckboxConsoleLog.args = {
  id: "ID3",
  onChange: e => console.log("test", e.target.value, e.target.id)
}

export const Multiple = () => {
  return (
    <>
      <CheckBox id="1ID" group="test">
        Checkbox 1
      </CheckBox>
      <CheckBox id="2ID" group="test">
        Checkbox 2
      </CheckBox>
    </>
  )
}

export const SameId = () => {
  return (
    <>
      <CheckBox id="1">Checkbox 1 </CheckBox>
      <CheckBox id="1">Checkbox 2 </CheckBox>
    </>
  )
}
