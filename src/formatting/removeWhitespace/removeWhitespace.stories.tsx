import { ComponentStory } from "@storybook/react"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { removeWhitespace } from "./removeWhitespace"

export default {
  title: "formatting/Remove Whitespace",
  component: removeWhitespace,
  parameters: {
    jest: ["removeWhitespace.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ value }) => {
  const output = removeWhitespace(value)

  return (
    <FunctionStory
      name={"removeWhitespace"}
      input={{ value }}
      output={output}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  value: "        Test"
}

export const Example = ({ value }) => (
  <div>
    <p>
      Remove leading white space <br />
      Result:
    </p>
    {removeWhitespace(value)}
  </div>
)

Example.args = {
  value: "        Test"
}

export const Trailing = ({ value }) => (
  <div>
    <p>
      Remove trailing white space
      <br />
      Result:
    </p>
    {removeWhitespace(value)}
  </div>
)

Trailing.args = {
  value: "Test         "
}

export const AllWhitespace = ({ value }) => (
  <div>
    <p>
      Remove white space in entire string
      <br />
      Result:
    </p>
    {removeWhitespace(value)}
  </div>
)

AllWhitespace.args = {
  value:
    "This will be hard to read, but that is intended, because i have removed all white space"
}
