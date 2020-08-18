import React from "react"
import KeyFigures from "./Keyfigures.js"

export default {
  title: "New/DataViz/Keyfigures",
  component: KeyFigures
}

export const KeyFiguresStandard = args => (
  <KeyFigures
    figures={[
      {
        label: "Label",
        amount: 45854,
        key: 546456 + "booked"
      },
      {
        label: "Available",
        amount: 456486,
        key: 56456 + "available"
      },
      {
        label: "New Label",
        amount: 346,
        key: 364 + "available"
      }
    ]}
  />
)

export const KeyFiguresSingle = args => (
  <KeyFigures
    figures={[
      {
        label: "Single",
        amount: 45854,
        key: 546456 + "booked"
      }
    ]}
  />
)

export const KeyFiguresTwoObjects = args => (
  <KeyFigures
    figures={[
      {
        label: "One",
        amount: 45854,
        key: 546456 + "One"
      },
      {
        label: "Two",
        amount: 24241,
        key: 24241 + "Two"
      }
    ]}
  />
)

export const KeyFiguresLowNumbers = args => (
  <KeyFigures
    figures={[
      {
        label: "Label",
        amount: 1,
        key: 1 + "booked"
      },
      {
        label: "Available",
        amount: 2,
        key: 2 + "available"
      },
      {
        label: "New Label",
        amount: 3,
        key: 3 + "available"
      }
    ]}
  />
)

export const KeyFiguresHighNumbers = args => (
  <KeyFigures
    figures={[
      {
        label: "Label",
        amount: 10000000000,
        key: 10000000000 + "booked"
      },
      {
        label: "Available",
        amount: 20000000000,
        key: 20000000000 + "available"
      },
      {
        label: "New Label",
        amount: 30000000000,
        key: 30000000000 + "available"
      }
    ]}
  />
)

export const KeyFiguresShortLabels = args => (
  <KeyFigures
    figures={[
      {
        label: "L",
        amount: 10000000000,
        key: 10000000000 + "booked"
      },
      {
        label: "Ti",
        amount: 20000000000,
        key: 20000000000 + "available"
      },
      {
        label: "Ann",
        amount: 30000000000,
        key: 30000000000 + "available"
      }
    ]}
  />
)

export const KeyFiguresLongLabelsAndHighNumbers = args => (
  <KeyFigures
    figures={[
      {
        label: "This label is longer than it should be",
        amount: 10000000000,
        key: 10000000000 + "booked"
      },
      {
        label: "This label is also longer than it should be",
        amount: 20000000000,
        key: 20000000000 + "available"
      },
      {
        label:
          "They are all way to long, make them shorter! it should indeed be shorter",
        amount: 30000000000,
        key: 30000000000 + "available"
      }
    ]}
  />
)

export const KeyFiguresLongLabelsAndShortNumbers = args => (
  <KeyFigures
    figures={[
      {
        label:
          "This label is longer than it should be, it should indeed be shorter",
        amount: 1,
        key: 1 + "booked"
      },
      {
        label:
          "This label is also longer than it should be, it should indeed be shorter",
        amount: 2,
        key: 2 + "available"
      },
      {
        label:
          "They are all way to long, make them shorter! it should indeed be shorter",
        amount: 3,
        key: 3 + "available"
      }
    ]}
  />
)
