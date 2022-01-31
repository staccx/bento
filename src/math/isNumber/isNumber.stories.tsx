import React from "react"
import { isNumber } from "./isNumber"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/isNumber",
  component: isNumber,
  parameters: {
    jest: ["isNumber.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ n }) => {
  const output = isNumber(n)

  return (
    <FunctionStory name={"isNumber"} input={{ n }} output={output.toString()} />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  n: 10
}
