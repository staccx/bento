import React from "react"
import { storiesOf } from "@storybook/react"
import KeyFigures from "./Keyfigures"
import docs from "./Keyfigures.md"

storiesOf("components|base/DataViz/Keyfigures", module)
  // failer uten props
  .add(
    "Normal numbers",
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
  .add(
    "Low numbers",
    () => (
      <KeyFigures
        figures={[
          {
            label: "Label",
            amount: 1,
            key: 1 + "booked"
          },
          {
            label: "Tilgjengelig",
            amount: 2,
            key: 2 + "available"
          },
          {
            label: "Annen sum",
            amount: 3,
            key: 3 + "available"
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
  .add(
    "High numbers",
    () => (
      <KeyFigures
        figures={[
          {
            label: "Label",
            amount: 10000000000,
            key: 10000000000 + "booked"
          },
          {
            label: "Tilgjengelig",
            amount: 20000000000,
            key: 20000000000 + "available"
          },
          {
            label: "Annen sum",
            amount: 30000000000,
            key: 30000000000 + "available"
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
