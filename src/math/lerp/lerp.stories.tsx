import React from "react"
import { lerp } from "./lerp"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/lerp",
  component: lerp,
  parameters: {
    jest: ["lerp.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ min, max, value }) => {
  const output = lerp(min, max, value)

  return (
    <FunctionStory
      name={"lerp"}
      input={{ min, max, value }}
      output={output.toString()}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  min: 0,
  max: 10,
  value: 0.5
}
