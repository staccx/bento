import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import ProgressBar from "./ProgressBar"
import docs from "./ProgressBar.md"

storiesOf("components|base/DataViz/ProgressBar", module)
  .addDecorator(withKnobs)
  .add("no props", () => <ProgressBar />, {
    info: {
      text: docs
    }
  })
  .add("props with knobs", () => {
    const label = "Progress"
    const defaultValue = "0.5"
    const options = {
      range: true,
      min: 0,
      max: 1,
      warningThreshold: 0.85,
      step: 0.01
    }
    const value = number(label, defaultValue, options)
    return (
      <ProgressBar
        progress={value}
        warningThreshold={options.warningThreshold}
      />
    )
  })
