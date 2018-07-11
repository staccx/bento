import React from "react"
import Odometer from "./Odometer"

const preview = {
  title: "Odometer",
  category: "component",
  tags: ["visual"],
  component: Odometer,
  render: props => (
    <Odometer number={1234567890} speed={500} size={32} {...props} />
  )
}

export default preview
