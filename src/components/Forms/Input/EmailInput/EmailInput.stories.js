import React from "react"
import { storiesOf } from "@storybook/react"
import EmailInput from "./EmailInput"

storiesOf("components|base/Forms/Input/EmailInput", module).add(
  "no props",
  () => {
    return <EmailInput label={"EmailInput"} id="9852145" />
  }
)
