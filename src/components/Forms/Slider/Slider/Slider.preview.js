import React from "react"
import Slider from "./Slider"

const preview = {
  title: "Slider",
  category: "Components/Forms",
  component: Slider,
  render: props => (
    <div>
      <Slider
        name="slider"
        onChange={e => console.log("Sliiiide", e.target.value)}
        min={1}
        max={100}
      />
    </div>
  )
}

export default preview
