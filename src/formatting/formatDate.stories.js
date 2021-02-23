import { formatDate } from "./date"

const date = "2020-02-12T00:00:00"
const dateObject = new Date(1525968057000)

export default {
  title: "formatting/Format date",
  component: formatDate
}

export const Default = (args) => (
  <div>
    <p>This is the standard formatDate with no options, this converts to the standard: 12 februar 2020
    </p>
    {formatDate(args.date)}
  </div>
)

Default.args = {
  date
}

export const FormattingStyles = (args) => (
  <div>
    <p>
      The way to decide how the formatting wil become is by the format string that is passed to formatDate
      there are several different ways to display a date string, and they can all be formatted with formatDate
    </p>
    {formatDate(args.date, args.format1)} <br />
    {formatDate(args.date, args.format2)} <br />
    {formatDate(args.date, args.format3)} <br />
    {formatDate(args.date, args.format4)}
  </div>
)

FormattingStyles.args = {
  date,
  format1: "dd.MM.yy",
  format2: "dd.MMMM.yy",
  format3: "dd.MM.yyyy",
  format4: "dd.MMMM.yyyy"
}

export const CustomYearFormat = (args) => (
  <div>
    <p>Here is an example of how you can return the whole year, with the format yyyy</p>
    {formatDate(args.date, args.format)}
  </div>
)

CustomYearFormat.args = {
  date,
  format: "yyyy"
}

export const CustomMonthFormat = (args) => (
  <div>
    <p>Here is an example of how you can return the month as a string, with the MMMM format</p>
    {formatDate(args.date, args.format)}
  </div>
)

CustomMonthFormat.args = {
  date,
  format: "MMMM"
}

export const CustomTimeFormat = (args) => (
  <div>
    <p>Here is an example of how you can return hours and minutes with a HH:mm format</p>
    {formatDate(args.date, args.format)}
  </div>
)

CustomTimeFormat.args = {
  date,
  format: "HH:mm"
}

export const CustomFullMonthAndYearFormat = (args) => (
  <div>
    <p>Here is an example of how you can return the full month and year, with a dd/MMM/yyyy format</p>
    {formatDate(args.date, args.format)}
  </div>
)

CustomFullMonthAndYearFormat.args = {
  date,
  format: "dd/MMM/yyyy"
}

export const CustomDateObjectFormat = (args) => (
  <div>
    <p>FormatDate can also take in a dateObject and format that, the functionality will be the same as with
      a date string in ISO 8601 format.</p>
    {formatDate(args.date, args.format)}
  </div>
)

CustomDateObjectFormat.args = {
  date: dateObject,
  format: "dd/MMM/yyyy"
}
