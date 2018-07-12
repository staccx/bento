import React from "react"
import Input from "./Input"

const preview = {
  title: "Input",
  category: "component/Forms/Input",
  component: Input,
  render: props => (
    <Input label={"Your label"} {...props} id={"scramble scrabmle"} />
  )
}

export default preview
