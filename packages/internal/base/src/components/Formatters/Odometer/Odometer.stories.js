import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import Odometer from "./Odometer"
import docs from "./Odometer.md"

storiesOf("components|base/Formatters/Odometer", module)
  .addDecorator(withKnobs)
  .add("no props", () => <Odometer />, {
    info: {
      text: docs
    }
  })
  .add(
    "DefaultValue 20, max 1000",
    () => {
      const label = "Odometer Value"
      const defaultValue = "20"
      const options = {
        range: true,
        min: 0,
        max: 1000,
        step: 1
      }
      const value = number(label, defaultValue, options)
      return <Odometer number={value} size={200} />
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "DefaultValue 1000, max 100000",
    () => {
      const label = "Odometer Value"
      const defaultValue = "1000"
      const options = {
        range: true,
        min: 0,
        max: 100000,
        step: 10
      }
      const value = number(label, defaultValue, options)
      return <Odometer number={value} size={200} />
    },
    {
      info: {
        text: docs
      }
    }
  )
