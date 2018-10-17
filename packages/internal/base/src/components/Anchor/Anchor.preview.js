import React from "react"
import Anchor from "./A"

const preview = {
  title: "Button",
  category: "Components/Buttons",
  tags: ["component", "clickable", "button"],
  component: Anchor,
  render: props => <Anchor {...props}>This is just a simple link</Anchor>
}

export default preview
