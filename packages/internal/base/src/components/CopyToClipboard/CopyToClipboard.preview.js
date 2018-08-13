import React from "react"
import Copy from "./CopyToClipboard"
import Button from "../Button/Button"
import Input from "../Forms/Input/Input"

const defaultValue = "My text"
export default {
  title: "Copy to clipboard",
  category: "Components/Utilites",
  tags: ["utility"],
  component: Copy,
  render: props => (
    <Copy>
      {({ copy }) => (
        <div>Use the copy function to copy what you want to clipboard</div>
      )}
    </Copy>
  ),
  renderExampleController: ({ setComponentState, text }) => (
    <Copy>
      {({ copy }) => (
        <div>
          <Input
            id={"copy"}
            onChange={e => setComponentState({ text: e.target.value })}
            defaultValue={defaultValue}
          />
          <Button onClick={() => copy(text || defaultValue)}>Click here</Button>
        </div>
      )}
    </Copy>
  )
}
