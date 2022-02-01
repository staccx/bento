import { ComponentStory } from "@storybook/react"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import { formatDateDistance } from "./formatDateDistance"

const date1 = "2020-02-12T00:00:00"
const date2 = "2020-03-19T00:00:00"
const dateObject = new Date(1524614400000)

export default {
  title: "formatting/Format Date Distance",
  component: formatDateDistance,
  parameters: {
    jest: ["date.test.ts"]
  }
}

const Template: ComponentStory<any> = ({ from, to }) => {
  const output = formatDateDistance(from, to)

  return (
    <FunctionStory
      name={"formatDateDistance"}
      input={{ from, to }}
      output={output}
    />
  )
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {
  from: date1,
  to: date2
}

export const Example = ({ from, to }) => (
  <div>
    <p>
      FormatDateDistance takes two dates, and returns the distance between them,
      in the form of how long it is from date1 until date 2. In this instance
      from february to march:
    </p>
    {formatDateDistance(from, to)}
  </div>
)

Example.args = {
  from: date1,
  to: date2
}

export const CustomYearFormat = ({ from, to }) => (
  <div>
    <p>
      FormatDateDistance allow use of both ISO 8601 format and date object, and
      can also compare them
    </p>
    {formatDateDistance(from, to)}
  </div>
)

CustomYearFormat.args = {
  from: dateObject,
  to: date2
}
