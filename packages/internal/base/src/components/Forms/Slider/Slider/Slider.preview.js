import React from "react"
import Slider from "./Slider"

const preview = {
  title: "Slider",
  category: "Components/Forms",
  component: Slider,
  render: props => (
    <div>
      <Slider name="slider" onChange={() => console.log("Sliiiide")} />
    </div>
  )
}

export default preview
