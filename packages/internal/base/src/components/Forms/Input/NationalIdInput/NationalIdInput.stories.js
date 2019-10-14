import React from "react"
import { storiesOf } from "@storybook/react"
import NationalIdInput from "./NationalIdInput"

storiesOf("components|base/Forms/Input/NationalIdInput", module).add(
  "no props",
  () => {
    return <NationalIdInput label={"NationalIdInput"} id="9852145" />
  }
)
