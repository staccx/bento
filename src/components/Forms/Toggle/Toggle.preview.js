import React from "react"
import Toggle from "./Toggle"
import Label from "../Label/Label"

const preview = {
  title: "Toggle",
  category: "Components/Forms",
  component: Toggle,
  render: props => (
    <div>
      <Label htmlFor="gfdfgfddffhhg">Toggle This</Label>
      <Toggle group="testddd" id="gfdfgfddffhhg" onChange={() => null}>
        Toggle this
      </Toggle>
    </div>
  )
}

export default preview
