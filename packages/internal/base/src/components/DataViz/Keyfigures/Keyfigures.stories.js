import React from "react"
import { storiesOf } from "@storybook/react"
import KeyFigures from "./Keyfigures"
import docs from "./Keyfigures.md"

storiesOf("components|base/DataViz/Keyfigures", module)
  // failer uten props
  .add(
    "with props",
    () => (
      <KeyFigures
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
      />
    ),
    {
      info: {
        text: docs
      }
    }
  )
