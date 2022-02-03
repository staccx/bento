import React from "react"
import { ComponentStory } from "@storybook/react"
import FunctionStory from "../../_storyhelpers/FunctionStory"

import { abbreviateCurrency } from "./abbreviateCurrency"

export default {
  title: "formatting/Abbreviate Currency",
  component: abbreviateCurrency,
  parameters: {
    jest: ["abbreviateCurrency.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ value, ...options }) => {
  const output = abbreviateCurrency(value, options)

  return (
    <FunctionStory
      name={"abbreviateCurrency"}
      input={{ value, options }}
      output={output}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  value: 1_000_000
}

export const Example = ({ value, ...options }) => (
  <div>
    <p>This is the standard abbreviateCurrency</p>
    {abbreviateCurrency(value, options)}
  </div>
)

Example.args = {
  value: 1_000_000
}
