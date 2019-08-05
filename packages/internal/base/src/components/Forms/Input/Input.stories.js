import React, { useRef } from "react"
import { storiesOf } from "@storybook/react"
import Input from "./Input"
import Button from "../../Button/Button"
import documentation from "./Input.md"

const RefTest = () => {
  const input = useRef(null)

  return (
    <div>
      <Input label={"Handling focus"} ref={input} />
      <Button onClick={() => input.current.focus()}>Focus</Button>
      <Button onClick={() => input.current.blur()}>unFocus</Button>
    </div>
  )
}

const StorybookInput = props => (
  <div>
    <Input {...props} />
  </div>
)

const options = { info: { text: documentation } }

storiesOf("Components|Base/Forms/Input", module)
  .add("No props", () => <StorybookInput />, options)
  .add("With label", () => <StorybookInput label={"Your label"} />, options)
  .add(
    "Log",
    () => <StorybookInput label={"Your label"} onChange={console.log} />,
    options
  )
  .add("Focus", () => <RefTest />, options)
  .add(
    "Default value",
    () => <StorybookInput defaultValue={"This is the default value"} />,
    options
  )
  .add(
    "Placeholder",
    () => <StorybookInput placeholder={"Placeholder"} />,
    options
  )
  .add(
    "Help text",
    () => (
      <StorybookInput
        label={"Helping you"}
        helpText={"This is a helping text"}
      />
    ),
    options
  )
  .add(
    "Email",
    () => <StorybookInput label={"Your Email..."} type={"email"} />,
    options
  )
  .add(
    "Text",
    () => <StorybookInput label={"Some text"} type={"text"} />,
    options
  )
