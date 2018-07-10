import React from "react"
import Input from "./Input"

const preview = {
  title: "Input",
  category: "component",
  component: Input,
  render: props => (
    <React.Fragment>
      <Input label={"Your label"} {...props} id={"scramble scrabmle"} />
    </React.Fragment>
  )
}

export default preview
