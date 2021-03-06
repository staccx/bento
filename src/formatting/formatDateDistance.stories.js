import { formatDateDistance } from "./date"

const date1 = "2020-02-12T00:00:00"
const date2 = "2020-03-19T00:00:00"
const dateObject = new Date(1524614400000)


export default {
  title: "formatting/Format date distance",
  component: formatDateDistance
}

export const Default = (args) => (
  <div>
    <p>
      FormatDateDistance takes two dates, and returns the distance between them, in the form of
      how long it is from date1 until date 2. In this instance from february to march:
    </p>
    {formatDateDistance(args.from, args.to)}
  </div>
)

Default.args = {
  from: date1,
  to: date2
}


export const CustomYearFormat = (args) => (
  <div>
    <p>FormatDateDistance allow use of both ISO 8601 format and date object, and can also compare them</p>
    {formatDateDistance(args.from, args.to)}
  </div>
)

CustomYearFormat.args = {
  from: dateObject,
  to: date2
}

