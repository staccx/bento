import formatName from "./formatName"

export default {
  title: "formatting/Format name",
  component: formatName
}

export const Default = args => (
  <div>
    <p>
      Here formatName takes the name Jane doe and formats it. <br />
      Result:
    </p>
    {formatName(args.name)}
  </div>
)

Default.args = {
  name: "Jane doe"
}

export const FromUppercaseFormat = args => (
  <div>
    <p>
      FormatName will also work from uppercase. <br />
      Result:
    </p>
    {formatName(args.name)}
  </div>
)

FromUppercaseFormat.args = {
  name: "JANE DOE"
}

export const CustomSeparatorFormat = args => (
  <div>
    <p>
      Format name also allows for custom separators. <br />
      Result:
    </p>
    {formatName(args.name, { separator: args.separator })}
  </div>
)

CustomSeparatorFormat.args = {
  name: "Jane doe",
  separator: "-"
}
