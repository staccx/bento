import React from "react"
import { storiesOf } from "@storybook/react"
import Slider from "./Slider"

storiesOf("components|base/Forms/Slider", module).add("Default", () => {
  return (
    <Slider
      name="Slider"
      onChange={e => console.log("Sliiiiide", e.target.value)}
      min={1}
      max={100}
    />
  )
})
