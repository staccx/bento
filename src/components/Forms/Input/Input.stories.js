import React, { useEffect, useState } from "react"
import Input from "./Input"
import Button from "../../Button/Button"

export default {
  title: "/Components/Forms/Input/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `Works as standard input, but with this new version one can add on a mode that returns a value and a rawValue.<br />
           Mode uses masks. All older versions of input are supported within this new version.
          <br />
          <br />
          <i>See below which modes that are available.</i>
          `
      }
    }
  }
}

export const WithValue = args => {
  const [value, setValue] = useState("")
  return (
    <Input
      id={"withvalue"}
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder={"With value"}
      {...args}
    />
  )
}

WithValue.args = {
  label: "With value set by external state[Controlled]"
}

export const HelpText = args => <Input {...args} />
HelpText.args = {
  label: "This is a label",
  helpText: "The ❔ will show up when you add the `helpText` prop"
}

export const Standard = args => <Input {...args} />
Standard.args = {
  label: "Input"
}

export const StandardWithLargeNumber = args => <Input {...args} />
StandardWithLargeNumber.args = {
  label: "Input",
  mode: "currency",
  defaultValue: 1234567
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
  return <Input {...args} value={value} />
}

ControlledWithMode.args = {
  label: "Input (changes value every second",
  value: "100000",
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

export const DelayedValue = args => <AsyncValueTest args={args} />
DelayedValue.args = {}

const AsyncDefaultValueTest = ({ args }) => {
  const [value, valueSet] = useState(args?.value)
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("setting default value")
      valueSet("Default value is now set")
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Input
      id={"delayedDefaultValue"}
      defaultValue={value}
      label={"This input's default value will be populated after to sec"}
    />
  )
}

export const DelayedDefaultValue = args => <AsyncDefaultValueTest args={args} />
DelayedDefaultValue.args = {}

export const DelayedWithMode = args => {
  const [value, valueSet] = useState(args?.value)
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("setting default value")
      valueSet(args?.newValue)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Input
      id={"delayedDefaultWithMode"}
      value={value}
      label={
        "This input's value will be populated after to sec with currency mode"
      }
      {...args}
    />
  )
}

DelayedWithMode.args = {
  newValue: 1234567,
  mode: "currency"
}

export const NumericInputMode = args => (
  <Input {...Input.inputModes[args.mode]} value={args.value} />
)
NumericInputMode.args = {
  mode: "numeric",
  value: 100000
}

NumericInputMode.parameters = {
  docs: {
    description: {
      story: `Please do not confuse *inputMode* from _formatting mode_. *inputMode* affect the device keyboard and _"mode"_ affects`
    }
  }
}

export const EmailInputMode = args => (
  <Input {...Input.inputModes[args.mode]} value={args.value} />
)
EmailInputMode.args = {
  mode: "email",
  value: "ola.nordmann@epost.no"
}

export const ClearComponent = args => {
  const [text, textSet] = useState(null)
  const handleInputChange = e => {
    textSet(e.target.value)
  }

  const clear = val => {
    textSet(val)
  }

  return (
    <div>
      <p>Text is: {text}</p>
      <Input {...args} value={text} onChange={handleInputChange} />
      <Button onClick={() => clear(undefined)}>Clear (undefined)</Button>
      <Button onClick={() => clear("")}>Empty string</Button>
    </div>
  )
}

ClearComponent.args = {
  id: "clearExample"
}
