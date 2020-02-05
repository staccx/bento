import React from "react"
import Keyfigures from "./Keyfigures"

const preview = {
  title: "Keyfigures",
  category: "Components/Dataviz",
  tags: ["component", "dataviz"],
  component: Keyfigures,
  render: props => (
    <Keyfigures
      figures={[
        {
          label: "Label",
          amount: 45854,
          key: 546456 + "booked"
        },
        {
          label: "Tilgjengelig",
          amount: 456486,
          key: 56456 + "available"
        },
        {
          label: "Annen sum",
          amount: 346,
          key: 364 + "available"
        }
      ]}
      {...props}
    />
  )
}

export default preview
