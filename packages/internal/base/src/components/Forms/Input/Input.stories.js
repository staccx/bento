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

storiesOf("Base/Components/Forms/Input", module)
  .add("No props", () => <Input />)
  .add("With label", () => <Input label={"Your label"} />)
  .add("Log", () => <Input label={"Your label"} onChange={console.log} />)
  .add("Focus", () => <RefTest />)
  .add("Default value", () => (
    <Input defaultValue={"This is the default value"} />
  ))
  .add("Placeholder", () => <Input placeholder={"Placeholder"} />)
  .add("Help text", () => (
    <Input label={"Helping you"} helpText={"This is a helping text"} />
  ))
