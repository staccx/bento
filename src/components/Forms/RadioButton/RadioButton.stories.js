import React from "react"
import RadioButton from "./RadioButton"

export default {
  title: "Components/Forms/RadioButton",
  component: RadioButton
}

export const Standard = args => <RadioButton {...args} />
Standard.args = {
  id: "123"
}

export const Group = args => {
  return (
    <>
      <RadioButton id="123" group="test">
        Radio1
      </RadioButton>
      <RadioButton id="124" group="test">
        Radio2
      </RadioButton>
      <RadioButton id="125" group="test">
        Radio3
      </RadioButton>
    </>
  )
}

export const Disabled = args => <RadioButton {...args} />
Disabled.args = { id: "130", disabled: true }

export const DefaultChecked = args => {
  return (
    <>
      <RadioButton id="123" defaultChecked="true">
        Radio1
      </RadioButton>
      <RadioButton id="124">Radio2</RadioButton>
      <RadioButton id="125">Radio3</RadioButton>
    </>
  )
}
DefaultChecked.args = { group: "test" }

export const NoGroup = args => {
  return (
    <>
      <RadioButton id="123">Radio1</RadioButton>
      <RadioButton id="124">Radio2</RadioButton>
      <RadioButton id="125">Radio3</RadioButton>
    </>
  )
}

export const SameId = args => {
  return (
    <>
      <RadioButton id="123">Radio1</RadioButton>
      <RadioButton id="123">Radio2</RadioButton>
    </>
  )
}
