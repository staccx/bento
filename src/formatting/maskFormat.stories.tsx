import maskFormat from "./maskFormat"

export default {
  title: "formatting/Mask format",
  component: maskFormat
}

export const Default = args => (
  <div>
    <p>
      Here is maskFormat with the standard mask here formatting a string <br />
      Result:
    </p>
    {maskFormat(args.value)}
  </div>
)

Default.args = {
  value: "92284082"
}

export const PassingMaskFormat = args => (
  <div>
    <p>
      Passing a mask to maskFormat will allow you to format the string as you
      want <br />
      Result:
    </p>
    {maskFormat(args.value, args.mask)}
  </div>
)

PassingMaskFormat.args = {
  value: "92284082",
  mask: "XXXX XXXX"
}

export const PassingMaskWithPrefix = args => (
  <div>
    <p>
      Here maskFormat also allows you to add prefix to the string like a
      phoneNumber as you see here <br />
      Result:
    </p>
    {maskFormat(args.value, args.mask)}
  </div>
)

PassingMaskWithPrefix.args = {
  value: "92284082",
  mask: "tlf: XXX XX XXX"
}

export const CustomDelimiter = args => (
  <div>
    <p>
      You can also pass a custom delimiter through the mask, replacing the
      standard space with whatever you like <br />
      Result:
    </p>
    {maskFormat(args.value, args.mask)}
  </div>
)

CustomDelimiter.args = {
  value: "92284082",
  mask: "XXX-XX-XXX"
}
