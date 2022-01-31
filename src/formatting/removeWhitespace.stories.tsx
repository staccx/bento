import removeWhitespace from "./removeWhitespace"

export default {
  title: "formatting/Remove whitespace",
  component: removeWhitespace,
  parameters: {
    jest: ["removeWhitespace.test.ts"]
  }
}

export const Default = ({ value }) => (
  <div>
    <p>
      Remove leading white space <br />
      Result:
    </p>
    {removeWhitespace(value)}
  </div>
)

Default.args = {
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
