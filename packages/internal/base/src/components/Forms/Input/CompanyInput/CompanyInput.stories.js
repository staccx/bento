import React from "react"
import { storiesOf } from "@storybook/react"
import CompanyInput from "./CompanyInput"

storiesOf("components|base/Forms/Input/CompanyInput", module).add(
  "no props",
  () => {
    return <CompanyInput label={"CompanyInput"} id="9852145" />
  }
)
