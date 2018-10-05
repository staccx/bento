import React from "react"
import A from "./A"

const preview = {
  title: "Button",
  category: "Components/Buttons",
  tags: ["component", "clickable", "button"],
  component: A,
  render: props => <A {...props}>This is just a simple link</A>
}

export default preview
