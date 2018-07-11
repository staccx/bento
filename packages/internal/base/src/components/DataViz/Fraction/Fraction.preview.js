import React from "react"
import Fraction from "./Fraction"

const preview = {
  title: "Fraction",
  category: "component",
  tags: ["component", "dataviz"],
  component: Fraction,
  render: props => <Fraction value={3} max={6} {...props} />
}

export default preview
