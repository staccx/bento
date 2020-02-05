import React, { useRef } from "react"
import { storiesOf } from "@storybook/react"
import Input from "./Input"
import Button from "../../Button/Button"
import docs from "./Input.md"

const RefTest = () => {
  const input = useRef(null)

  return (
    (
      <div>
        <Input label={"Handling focus"} ref={input} />
        <Button onClick={() => input.current.focus()}>Focus</Button>
        <Button onClick={() => input.current.blur()}>unFocus</Button>
      </div>
    ),
    { info: { text: docs } }
  )
}

const StorybookInput = props => (
  <div>
    <Input {...props} />
  </div>
)

const options = { info: { text: docs } }

storiesOf("Components|Base/Forms/Input", module)
  .add("No props", () => <StorybookInput />, options, { info: { text: docs } })
  .add("With label", () => <StorybookInput label={"Your label"} />, options, {
    info: { text: docs }
  })
  .add(
    "Log",
    () => <StorybookInput label={"Your label"} onChange={console.log} />,
    options,
    { info: { text: docs } }
  )
  .add("Focus", () => <RefTest />, options)
  .add(
    "Default value",
    () => <StorybookInput defaultValue={"This is the default value"} />,
    options,
    { info: { text: docs } }
  )
  .add(
    "Placeholder",
    () => <StorybookInput placeholder={"Placeholder"} />,
    options,
    { info: { text: docs } }
  )
  .add(
    "Help text",
    () => (
      <StorybookInput
        label={"Helping you"}
        helpText={"This is a helping text"}
      />
    ),
    options,
    { info: { text: docs } }
  )
  .add(
    "Email",
    () => <StorybookInput label={"Your Email..."} type={"email"} />,
    options,
    { info: { text: docs } }
  )
  .add(
    "Text",
    () => <StorybookInput label={"Some text"} type={"text"} />,
    options,
    { info: { text: docs } }
  )
