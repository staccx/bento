import { ComponentStory } from "@storybook/react"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { truncate } from "./truncate"

export default {
  title: "formatting/Truncate",
  component: truncate,
  parameters: {
    jest: ["truncate.test.ts"]
  },
  argTypes: {
    name: { control: "text" },
    separator: { control: "text" }
  }
}

const longString = "The quick brown fox jumps over the lazy dog"

const Template: ComponentStory<any> = ({ value, length, symbol }) => {
  const output = truncate(value, length, symbol)

  return (
    <FunctionStory
      name={"truncate"}
      input={{ value, length, symbol }}
      output={output}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  value: longString,
  length: 20,
  symbol: "..."
}

export const Example = ({ value }) => (
  <div>
    <p>
      Standard truncate <br />
      Original text: {longString} <br />
      Result:
    </p>
    {truncate(value)}
  </div>
)

Example.args = {
  value: longString
}

export const SetLength = ({ value, length }) => (
  <div>
    <p>
      Set truncate length
      <br />
      Original text: {longString} <br />
      Result:
    </p>
    {truncate(value, length)}
  </div>
)

SetLength.args = {
  value: longString,
  length: 10
}

export const SetSymbol = ({ value, length, symbol }) => (
  <div>
    <p>
      Pass other symbols to the truncate <br />
      Original text: {longString} <br />
      Result:
    </p>
    {truncate(value, length, symbol)}
  </div>
)

SetSymbol.args = {
  value: longString,
  length: 10,
  symbol: "---"
}
