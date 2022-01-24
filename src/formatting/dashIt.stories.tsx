import dashIt from "./dashIt"
export default {
  title: "formatting/dashIt",
  component: dashIt,
  parameters: {
    jest: ["dashIt.test.ts"]
  }
}

export const Default = args => (
  <div>
    <p>DashIt will replace all spaces with dashes.</p>
    <p>Original: {args.text}</p>
    New: {dashIt(args.text)}
  </div>
)

Default.args = {
  text: "This is a long text with a lot of spaces"
}
