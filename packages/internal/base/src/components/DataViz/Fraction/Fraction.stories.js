import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import Fraction from "./Fraction"
import docs from "./Fraction.md"
import Label from "../../Forms/Label/Label"

storiesOf("components|base/DataViz/Fraction", module)
  .addDecorator(withKnobs)
  .add(
    "DefaultValue 5",
    () => {
      const label = "progress"
      const defaultValue = "5"
      const options = {
        range: true,
        min: 0,
        max: 10,
        step: 1
      }
      const value = number(label, defaultValue, options)
      return (
        <div>
          <Label>Progress</Label> <Fraction value={value} max={options.max} />
        </div>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )

  .add("With 20 as max", () => <Fraction value={10} max={20} />, {
    info: {
      text: docs
    }
  })

  .add("With 2 as max", () => <Fraction value={1} max={2} />, {
    info: {
      text: docs
    }
  })
  .add(
    "DefaultValue 0",
    () => {
      const label = "progress"
      const defaultValue = "0"
      const options = {
        range: true,
        min: 0,
        max: 10,
        step: 1
      }
      const value = number(label, defaultValue, options)
      return (
        <div>
          <Label>Progress</Label> <Fraction value={value} max={options.max} />
        </div>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Max as 0",
    () => {
      const label = "progress"
      const defaultValue = "1"
      const options = {
        range: true,
        min: 0,
        max: 0,
        step: 1
      }
      const value = number(label, defaultValue, options)
      return (
        <div>
          <Label>Progress</Label> <Fraction value={value} max={options.max} />
        </div>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "DefaultValue max",
    () => {
      const label = "progress"
      const defaultValue = "10"
      const options = {
        range: true,
        min: 0,
        max: 10,
        step: 1
      }
      const value = number(label, defaultValue, options)
      return (
        <div>
          <Label>Progress</Label> <Fraction value={value} max={options.max} />
        </div>
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
