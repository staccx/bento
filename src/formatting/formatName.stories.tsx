import formatName from "./formatName"

export default {
  title: "formatting/Format name",
  component: formatName,
  parameters: {
    jest: ["date.test.ts"]
  }
}

export const Default = ({ name }) => (
  <div>
    <p>
      Here formatName takes the name Jane doe and formats it. <br />
      Result:
    </p>
    {formatName(name)}
  </div>
)

Default.args = {
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
