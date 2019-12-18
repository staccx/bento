import React from "react"
import Anchor from "./Anchor"

const preview = {
  title: "Anchor",
  category: "Components/Anchor",
  tags: ["component", "clickable", "button"],
  component: Anchor,
  render: props => <Anchor {...props}>This is just a simple link</Anchor>
}

export default preview
