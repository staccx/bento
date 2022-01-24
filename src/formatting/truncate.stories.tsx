import truncate from "./truncate"

export default {
  title: "formatting/Truncate",
  component: truncate,
  parameters: {
    jest: ["truncate.test.ts"]
  }
}

const longString = "The quick brown fox jumps over the lazy dog"

export const Default = args => (
  <div>
    <p>
      Standard truncate <br />
      Original text: {longString} <br />
      Result:
    </p>
    {truncate(args.value)}
  </div>
)

Default.args = {
  value: longString
}

export const SetLength = args => (
  <div>
    <p>
      Set truncate length
      <br />
      Original text: {longString} <br />
      Result:
    </p>
    {truncate(args.value, args.length)}
  </div>
)

SetLength.args = {
  value: longString,
  length: 10
}

export const SetSymbol = args => (
  <div>
    <p>
      Pass other symbols to the truncate <br />
      Original text: {longString} <br />
      Result:
    </p>
    {truncate(args.value, args.length, args.symbol)}
  </div>
)

SetSymbol.args = {
  value: longString,
  length: 10,
  symbol: "---"
}
