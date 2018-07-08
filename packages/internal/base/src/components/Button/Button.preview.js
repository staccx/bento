import React from "react"
import Button from "./Button"

const preview = {
  title: "Button",
  category: "component",
  tags: ["component", "clickable", "button"],
  component: Button,
  render: props => <Button {...props}>Cool Button</Button>
}

export default preview
