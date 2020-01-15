import React from "react"
import { storiesOf } from "@storybook/react"
import PhoneInput from "./PhoneInput"

storiesOf("components|base/Forms/Input/PhoneInput", module).add(
  "no props",
  () => <PhoneInput label={"PhoneInput"} id="9852145" />
)
