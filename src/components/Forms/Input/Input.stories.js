import React, { useEffect, useState } from "react"
import Input from "./Input"

export default {
  title: "/Components/Forms/Input/Input",
  component: Input
}

export const WithValue = args => {
  const [value, setValue] = useState("")
  return (
    <Input
      id={"withvalue"}
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder={"With valuer"}
    />
  )
}

WithValue.args = {
  label: "With value state"
}

export const Standard = args => <Input {...args} />
Standard.args = {
  label: "Input"
}

export const FileUpload = args => <Input {...args} />
FileUpload.args = {
  label: "Fileupload",
  type: "file",
  onChange: console.log
}

export const Controlled = args => <Input {...args} />
Controlled.args = {
  label: "Input",
  value: "Sphinx of black quartz, judge my vow"
}

export const ControlledWithChangingText = args => {
  const [value, valueSet] = useState(args.value)

  useEffect(() => {
    const words = ["", ..."Sphinx of black quartz, judge my vow".split(" ")]
    let interval = setInterval(() => {
      valueSet(words[Math.round(Math.random() * words.length)])
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log(value)
  return <Input {...args} value={value} />
}

ControlledWithChangingText.args = {
  label: "Input (changes value every second)",
  value: "Start text"
}

export const ControlledWithMode = args => {
  const [value, valueSet] = useState(args.value)

  useEffect(() => {
    let interval = setInterval(() => {
      valueSet(Math.round(Math.random() * args.value))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log(value)
  return <Input {...args} value={value} />
}
ControlledWithMode.args = {
  label: "Input (changes value every second",
  value: 100000,
  mode: "currency"
}

export const DefaultValue = args => <Input {...args} />
DefaultValue.args = {
  label: "Default Value set Input",
  defaultValue: "Sphinx of black quartz, judge my vow"
}

export const Placeholder = args => <Input {...args} />
Placeholder.args = {
  label: "Secret question",
  placeholder: "Your favorite animal"
}

export const Disabled = args => <Input {...args} />
Disabled.args = {
  label: "Input",
  disabled: true
}

export const Custom = args => (
  <Input {...args} blocks={[2, 2, 2]} pattern={/[^a-s]+/gi} />
)
Custom.args = {
  label: "This uses a custom locale [a-s]",
  level: 1,
  placeholder: "aa aa aa",
  mode: "custom"
}

export const Funny = args => <Input {...args} pattern={/[s]+/gi} />
Funny.args = {
  label: "Does not allow the use of the letter 's'",
  level: 1,
  mode: "custom"
}

export const MaskProperty = args => (
  <Input {...args} mask="XX XXXXXX" delimiter="." />
)
MaskProperty.args = {
  label: "Uses the mask property to define its mask custom",
  mode: "custom",
  level: 1
}
