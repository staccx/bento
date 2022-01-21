import removeWhitespace from "./removeWhitespace"

export default {
  title: "formatting/Remove whitespace",
  component: removeWhitespace
}

export const Default = args => (
  <div>
    <p>
      Remove leading white space <br />
      Result:
    </p>
    {removeWhitespace(args.value)}
  </div>
)

Default.args = {
  value: "        Test"
}

export const Trailing = args => (
  <div>
    <p>
      Remove trailing white space
      <br />
      Result:
    </p>
    {removeWhitespace(args.value)}
  </div>
)

Trailing.args = {
  value: "Test         "
}

export const AllWhitespace = args => (
  <div>
    <p>
      Remove white space in entire string
      <br />
      Result:
    </p>
    {removeWhitespace(args.value)}
  </div>
)

AllWhitespace.args = {
  value:
    "This will be hard to read, but that is intended, because i have removed all white space"
}
