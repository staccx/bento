import React from "react"
import { isNumber } from "./isNumber"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/isNumber",
  component: isNumber,
  parameters: {
    jest: ["currency.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ n }) => {
  const output = isNumber(n)

  return (
    <FunctionStory name={"isNumber"} input={{ n }} output={output.toString()} />
  )
}

export const ProofOfConcept = Template.bind({})
ProofOfConcept.args = {
  n: 10
}
