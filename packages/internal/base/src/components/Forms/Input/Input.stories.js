import React, { useRef } from "react"
import { storiesOf } from "@storybook/react"
import Input from "./Input"
import Button from "../../Button/Button"

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

storiesOf("Components|Base/Forms/Input", module)
  .add("No props", () => <StorybookInput />)
  .add("With label", () => <StorybookInput label={"Your label"} />)
  .add("Log", () => (
    <StorybookInput label={"Your label"} onChange={console.log} />
  ))
  .add("Focus", () => <RefTest />)
  .add("Default value", () => (
    <StorybookInput defaultValue={"This is the default value"} />
  ))
  .add("Placeholder", () => <StorybookInput placeholder={"Placeholder"} />)
  .add("Help text", () => (
    <StorybookInput label={"Helping you"} helpText={"This is a helping text"} />
  ))
  .add("Email", () => <StorybookInput label={"Your Email..."} type={"email"} />)
  .add("Text", () => <StorybookInput label={"Some text"} type={"text"} />)
