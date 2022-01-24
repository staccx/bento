import dashIt from "./dashIt"
import FunctionStory from "../_storyhelpers/FunctionStory"
import React from "react"
import { ComponentStory } from "@storybook/react"
export default {
  title: "formatting/dashIt",
  parameters: {
    jest: ["dashIt.test.ts"]
  },
  argTypes: {
    value: { control: "text" }
  }
}

const Template: ComponentStory<any> = ({ value }) => {
  const output = dashIt(value)

  return <FunctionStory name={"dashIt"} input={{ value }} output={output} />
}

export const ProofOfConcept = Template.bind({})
ProofOfConcept.args = {
  value: "This is a proof of concept æøå"
}

export const Default = Template.bind({})
Default.args = {
  value: "This is a long text with a lot of spaces"
}
