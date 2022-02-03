import { ComponentStory } from "@storybook/react"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { formatName } from "./formatName"

export default {
  title: "formatting/Format Name",
  component: formatName,
  parameters: {
    jest: ["date.test.ts"]
  },
  argTypes: {
    name: { control: "text" },
    separator: { control: "text" }
  }
}

const Template: ComponentStory<any> = ({ name, ...options }) => {
  const output = formatName(name, options)

  return (
    <FunctionStory
      name={"formatName"}
      input={{ name, options }}
      output={output}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  name: "Jane doe"
}

export const Example = ({ name }) => (
  <div>
    <p>
      Here formatName takes the name Jane doe and formats it. <br />
      Result:
    </p>
    {formatName(name)}
  </div>
)

Example.args = {
  name: "Jane doe"
}

export const FromUppercaseFormat = ({ name }) => (
  <div>
    <p>
      FormatName will also work from uppercase. <br />
      Result:
    </p>
    {formatName(name)}
  </div>
)

FromUppercaseFormat.args = {
  name: "JANE DOE"
}

export const CustomSeparatorFormat = ({ name, separator }) => (
  <div>
    <p>
      Format name also allows for custom separators. <br />
      Result:
    </p>
    {formatName(name, { separator })}
  </div>
)

CustomSeparatorFormat.args = {
  name: "Jane doe",
  separator: "-"
}
