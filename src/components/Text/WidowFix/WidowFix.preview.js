import React from "react"
import WidowFix from "./WidowFix"

const preview = {
  title: "WidowFix",
  category: "Components/Texts",
  tags: ["typography"],
  component: WidowFix,
  render: props => (
    <React.Fragment>
      <WidowFix {...props}>
        This is a line of text with default threshold.
      </WidowFix>
      <WidowFix {...props} threshold={3}>
        This line of text are set to a threshold of three.
      </WidowFix>
    </React.Fragment>
  )
}

export default preview
