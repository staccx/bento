import React from "react"
import { inverseLerp } from "./inverseLerp"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { ComponentStory } from "@storybook/react"
export default {
  title: "math/inverseLerp",
  component: inverseLerp,
  parameters: {
    jest: ["currency.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ min, max, value }) => {
  const output = inverseLerp(min, max, value)

  return (
    <FunctionStory
      name={"inverseLerp"}
      input={{ min, max, value }}
      output={output.toString()}
    />
  )
}

export const ProofOfConcept = Template.bind({})
ProofOfConcept.args = {
  min: 0,
  max: 10,
  value: 5
}
