import React from "react"
import SliderKeyboardInput from "./SliderKeyboardInput"

const preview = {
  title: "SliderKeyboardInput",
  category: "component/Forms",
  component: SliderKeyboardInput,
  render: props => (
    <div>
      <SliderKeyboardInput
        name="theSlider"
        label="Accessibility label"
        onChange={() => null}
        min={0}
        max={100000}
      />
    </div>
  )
}

export default preview
