import React from "react"
import { cosineInterpolate } from "./cosineInterpolate"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/Cosine interpolate",
  component: cosineInterpolate,
  parameters: {
    jest: ["cosineInterpolate.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ min, max, t }) => {
  const output = cosineInterpolate(min, max, t)

  return (
    <FunctionStory
      name={"cosineInterpolate"}
      input={{ min, max, t }}
      output={output.toString()}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  min: 0,
  max: 10,
  t: 0.5
}
