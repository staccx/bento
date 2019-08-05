import React from "react"
import { storiesOf } from "@storybook/react"
import AccountInput from "./AccountInput"

storiesOf("components|base/Forms/Input/AccountInput", module).add(
  "no props",
  () => {
    return <AccountInput label={"AccountInput"} id="9852145" />
  }
)
