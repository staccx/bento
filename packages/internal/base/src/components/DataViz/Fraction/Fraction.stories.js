import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import Fraction from "./Fraction"
import docs from "./Fraction.md"
import Label from "../../Forms/Label/Label"

storiesOf("components|base/DataViz/Fraction", module)
  .addDecorator(withKnobs)
  .add("no props", () => <Fraction />, {
    info: {
      text: docs
    }
  })
  .add(
    "with sliding knob",
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

  .add("with props at 5", () => <Fraction value={5} max={10} />, {
    info: {
      text: docs
    }
  })
