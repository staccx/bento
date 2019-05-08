import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import Donut from "./Donut"
import docs from "./Donut.md"

storiesOf("components|base/DataViz/Donut", module)
  .addDecorator(withKnobs)
  .add(
    "Default Value 0.5",
    () => {
      const label = "Progress"
      const defaultValue = 0.5
      const options = {
        range: true,
        min: 0,
        max: 1,
        step: 0.01
      }
      const value = number(label, defaultValue, options)
      return <Donut progress={value} />
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "WarningThreshold Low",
    () => {
      const label = "Progress"
      const defaultValue = 0.8
      const options = {
        range: true,
        min: 0,
        max: 1,
        step: 0.01,
        warningThreshold: 0.2
      }
      const value = number(label, defaultValue, options)
      return (
        <Donut progress={value} warningThreshold={options.warningThreshold} />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
