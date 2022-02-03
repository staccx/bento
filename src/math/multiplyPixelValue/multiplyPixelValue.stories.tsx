import React from "react"
import { multiplyPixelValue } from "./multiplyPixelValue"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/Multiply pixel value",
  component: multiplyPixelValue,
  parameters: {
    jest: ["multiplyPixelValue.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ value, multiplier, unit }) => {
  const output = multiplyPixelValue(value, multiplier, unit)

  return (
    <FunctionStory
      name={"multiplyPixelValue"}
      input={{ value, multiplier, unit }}
      output={output.toString()}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  value: "36px",
  multiplier: 2,
  unit: "em"
}
