import React from "react"
import { storiesOf } from "@storybook/react"
import BirthdateInput from "./BirthdateInput"

storiesOf("components|base/Forms/Input/BirthDateInput", module).add(
  "no props",
  () => {
    return <BirthdateInput label={"BithdateInput"} ids="9852145" />
  }
)
