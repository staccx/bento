import React from "react"
import Toggle from "./Toggle"

export default {
  title: "Components/Forms/Toggle",
  component: Toggle
}

export const Standard = args => <Toggle {...args} />
Standard.args = { name: "Toggle" }

export const Group = args => {
  return (
    <>
      <Toggle id="1" group="test" />
      <Toggle id="2" group="test" />
      <Toggle id="3" group="test" />
    </>
  )
}
