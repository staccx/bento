import React from "react"
import { storiesOf } from "@storybook/react"
import PostalCodeInput from "./PostalCodeInput"

storiesOf("components|base/Forms/Input/PostalCodeInput", module).add(
  "no props",
  () => {
    return <PostalCodeInput label={"PostalCodeInput"} id="9852145" />
  }
)
