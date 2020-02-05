import React from "react"
import { storiesOf } from "@storybook/react"
import CurrencyInput from "./CurrencyInput"

storiesOf("components|base/Forms/Input/CurrencyInput", module).add(
  "no props",
  () => {
    return <CurrencyInput label={"CurrencyInput"} id="9852145" />
  }
)
