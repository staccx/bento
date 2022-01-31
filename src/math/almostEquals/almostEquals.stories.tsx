import React from "react"
import { almostEquals } from "./almostEquals"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/almostEquals",
  component: almostEquals,
  parameters: {
    jest: ["almostEquals.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ value1, value2, precision }) => {
  const output = almostEquals(value1, value2, precision)

  return (
    <FunctionStory
      name={"almostEquals"}
      input={{ value1, value2, precision }}
      output={output.toString()}
    />
  )
}

export const ProofOfConcept = Template.bind({})
ProofOfConcept.args = {
  value1: 0.1,
  value2: 0.2,
  precision: 0.2
}
