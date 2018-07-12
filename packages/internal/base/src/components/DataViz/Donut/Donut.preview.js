import React from "react"
import Donut from "./Donut"

const preview = {
  title: "Donut",
  category: "component/Dataviz",
  tags: ["component", "dataviz"],
  component: Donut,
  render: props => <Donut percentage={0.25} {...props} />
}

export default preview
