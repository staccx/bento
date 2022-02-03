import { formatDate } from "./formatDate"
import FunctionStory from "../../_storyhelpers/FunctionStory"
import React from "react"
import * as locales from "date-fns/locale"
import { ComponentStory } from "@storybook/react"

const date = "2020-02-12T00:00:00"
const dateObject = new Date(1525968057000)

export default {
  title: "formatting/Format Date",
  component: formatDate,
  parameters: {
    jest: ["date.test.ts"]
  },
  argTypes: {
    date: { control: { type: "date" } },
    format: {
      control: { type: "text" }
    },
    locale: {
      control: {
        type: "select",
        options: Object.keys(locales)
      }
    },
    weekStartsOn: {
      control: { type: "range", min: 0, max: 6, step: 1 }
    }
  },
  args: {
    date: new Date(),
    weekStartsOn: 0,
    format: "iiii dd MMMM yyyy HH:mm:ss"
  }
}

const Template: ComponentStory<any> = ({
  date,
  format,
  locale,
  weekStartsOn
}) => {
  try {
    const l = locale ? locales[locale] : undefined
    const d = new Date(date)
    const output = formatDate(d, format, { locale: l, weekStartsOn })

    return (
      <FunctionStory
        name={"formatDate"}
        input={{ date: d, format, options: { locale: l, weekStartsOn } }}
        output={output}
      />
    )
  } catch (e: any) {
    return <div>Error in formatting: {e.message}</div>
  }
}

export const VisualDataFlow = Template.bind({})
VisualDataFlow.args = {}

export const FormattingStyles = ({
  date,
  format1,
  format2,
  format3,
  format4
}) => (
  <div>
    <p>
      The way to decide how the formatting wil become is by the format string
      that is passed to formatDate there are several different ways to display a
      date string, and they can all be formatted with formatDate
    </p>
    {formatDate(date, format1)} <br />
    {formatDate(date, format2)} <br />
    {formatDate(date, format3)} <br />
    {formatDate(date, format4)}
  </div>
)

FormattingStyles.args = {
  date,
  format1: "dd.MM.yy",
  format2: "dd.MMMM.yy",
  format3: "dd.MM.yyyy",
  format4: "dd.MMMM.yyyy"
}

export const CustomYearFormat = ({ date, format }) => (
  <div>
    <p>
      Here is an example of how you can return the whole year, with the format
      yyyy
    </p>
    {formatDate(date, format)}
  </div>
)

CustomYearFormat.args = {
  date,
  format: "yyyy"
}

export const CustomMonthFormat = ({ date, format }) => (
  <div>
    <p>
      Here is an example of how you can return the month as a string, with the
      MMMM format
    </p>
    {formatDate(date, format)}
  </div>
)

CustomMonthFormat.args = {
  date,
  format: "MMMM"
}

export const CustomTimeFormat = ({ date, format }) => (
  <div>
    <p>
      Here is an example of how you can return hours and minutes with a HH:mm
      format
    </p>
    {formatDate(date, format)}
  </div>
)

CustomTimeFormat.args = {
  date,
  format: "HH:mm"
}

export const CustomFullMonthAndYearFormat = ({ date, format }) => (
  <div>
    <p>
      Here is an example of how you can return the full month and year, with a
      dd/MMM/yyyy format
    </p>
    {formatDate(date, format)}
  </div>
)

CustomFullMonthAndYearFormat.args = {
  date,
  format: "dd/MMM/yyyy"
}

export const CustomDateObjectFormat = ({ date, format }) => (
  <div>
    <p>
      FormatDate can also take in a dateObject and format that, the
      functionality will be the same as with a date string in ISO 8601 format.
    </p>
    {formatDate(date, format)}
  </div>
)

CustomDateObjectFormat.args = {
  date: dateObject,
  format: "dd/MMM/yyyy"
}
