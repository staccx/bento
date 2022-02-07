import React from "react"
import { clamp } from "./clamp"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/Clamp",
  component: clamp,
  parameters: {
    jest: ["clamp.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ min, max, value }) => {
  const output = clamp(min, max, value)

  return (
    <FunctionStory
      name={"clamp"}
      input={{ min, max, value }}
      output={output.toString()}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  min: 1,
  max: 3,
  value: 2
}