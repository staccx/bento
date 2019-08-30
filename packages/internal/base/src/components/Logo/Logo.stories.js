import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import Logo from "./Logo"

storiesOf("components|base/Logo", module)
  .addDecorator(withKnobs)
  .add("One Logo", () => {
    const label = "Velg logo"
    const options = {
      kiwi: "kiwi",
      telenor: "Telenor",
      meny: "meny",
      rema: "rema",
      dnb: "dnb"
    }
    const defaultValue = "kiwi"
    const value = select(label, options, defaultValue)
    return <Logo brand={value} />
  })
