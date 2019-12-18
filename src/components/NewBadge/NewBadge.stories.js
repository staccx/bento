import React from "react"
import { storiesOf } from "@storybook/react"
import NewBadge from "./NewBadge"
import { withKnobs, number } from "@storybook/addon-knobs"

storiesOf("components|Base/NewBadge", module)
  .addDecorator(withKnobs)

  .add("DefaultValue 10000 max 10000", () => {
    const label = "tall"
    const defaultValue = 10
    const options = {
      range: true,
      min: 0,
      max: 10000,
      step: 1
    }
    const value = number(label, defaultValue, options)
    return <NewBadge number={value} />
  })
  .add("DefaultValue 1 max 10", () => {
    const label = "tall"
    const defaultValue = 1
    const options = {
      range: true,
      min: 0,
      max: 10,
      step: 1
    }
    const value = number(label, defaultValue, options)
    return <NewBadge number={value} />
  })
