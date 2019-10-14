import React from "react"
import { storiesOf } from "@storybook/react"
import CreditCardInput from "./CreditCardInput"

storiesOf("components|base/Forms/Input/CreditCardInput", module).add(
  "no props",
  () => {
    return <CreditCardInput label={"CreditCardInput"} ids="9852145" />
  }
)
