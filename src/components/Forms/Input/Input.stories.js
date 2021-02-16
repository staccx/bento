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

export const File = args => <Input {...args} />
File.args = {
  label: "Type file",
  type: "file"
}

const AsyncValueTest = ({ args }) => {
  const [value, valueSet] = useState(args?.value)
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("Value is set now")
      valueSet("Value is now set")
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Input
      id={"delayed"}
      value={value}
      label={"This input's value will be populated after to sec"}
    />
  )
}

export const Delayed = args => <AsyncValueTest args={args} />
Delayed.args = {}
