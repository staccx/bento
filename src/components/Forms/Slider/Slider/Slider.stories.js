import React from "react"
import Slider from "./Slider"

export default {
  title: "Components/Forms/Slider/Slider",
  component: Slider
}

export const Standard = args => <Slider {...args} />

export const Props = args => <Slider {...args} />
Props.args = {
  min: 0,
  max: 500,
  step: 50,
  defaultValue: 250,
  onChange: value => console.log("The value is", value),
  onUpdate: value => console.log("The current position is", value)
}
