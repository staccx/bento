import React from "react"
import SliderKeyboardInput from "./SliderKeyboardInput"

export default {
  title: "Components/Forms/Slider/SliderKeyboardInput",
  component: SliderKeyboardInput
}

export const Default = args => <SliderKeyboardInput {...args} />
Default.args = {
  label: "Slider with keyboard input",
  min: 100,
  max: 500,
  step: 50,
  defaultValue: 250,
  onChange: value => console.log("The value in default is ", value)
}

export const DefaultValueOutsideOfStepIncrement = args => (
  <SliderKeyboardInput {...args} />
)
DefaultValueOutsideOfStepIncrement.args = {
  name: "stepoutside",
  label: "Slider with keyboard input",
  min: 100,
  max: 500,
  step: 50,
  defaultValue: 251,
  onChange: value => console.log("The value step e is ", value)
}
