import React from "react"
import ProgressBar from "./ProgressBar"

const preview = {
  title: "ProgressBar",
  category: "component",
  tags: ["visual", "animated"],
  component: ProgressBar,
  render: props => <ProgressBar progress={80} {...props} />
}

export default preview
