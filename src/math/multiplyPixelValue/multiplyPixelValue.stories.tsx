import React from "react"
import { multiplyPixelValue } from "./multiplyPixelValue"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/multiplyPixelValue",
  component: multiplyPixelValue,
  parameters: {
    jest: ["currency.test.ts"]
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

export const ProofOfConcept = Template.bind({})
ProofOfConcept.args = {
  value: "36px",
  multiplier: 2,
  unit: "em"
}
