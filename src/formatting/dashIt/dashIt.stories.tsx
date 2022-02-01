import { dashIt } from "./dashIt"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import React from "react"
import { ComponentStory } from "@storybook/react"
export default {
  title: "formatting/Dash It",
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

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  value: "This is a proof of concept æøå"
}

export const Example = ({ value }) => (
  <div>
    <p>This is the standard dashIt</p>
    {dashIt(value)}
  </div>
)

Example.args = {
  value: "This is a proof of concept æøå"
}
