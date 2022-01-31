import maskFormat from "./maskFormat"

export default {
  title: "formatting/Mask format",
  component: maskFormat,
  parameters: {
    jest: ["maskFormat.test.ts"]
  }
}

export const Default = ({ value }) => (
  <div>
    <p>
      Here is maskFormat with the standard mask here formatting a string <br />
      Result:
    </p>
    {maskFormat(value)}
  </div>
)

Default.args = {
  value: "92284082"
}

export const PassingMaskFormat = ({ value, mask }) => (
  <div>
    <p>
      Passing a mask to maskFormat will allow you to format the string as you
      want <br />
      Result:
    </p>
    {maskFormat(value, mask)}
  </div>
)

PassingMaskFormat.args = {
  value: "92284082",
  mask: "XXXX XXXX"
}

export const PassingMaskWithPrefix = ({ value, mask }) => (
  <div>
    <p>
      Here maskFormat also allows you to add prefix to the string like a
      phoneNumber as you see here <br />
      Result:
    </p>
    {maskFormat(value, mask)}
  </div>
)

PassingMaskWithPrefix.args = {
  value: "92284082",
  mask: "tlf: XXX XX XXX"
}

export const CustomDelimiter = ({ value, mask }) => (
  <div>
    <p>
      You can also pass a custom delimiter through the mask, replacing the
      standard space with whatever you like <br />
      Result:
    </p>
    {maskFormat(value, mask)}
  </div>
)

CustomDelimiter.args = {
  value: "92284082",
  mask: "XXX-XX-XXX"
}
