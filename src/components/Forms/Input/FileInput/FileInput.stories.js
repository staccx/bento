import React from "react"
import { storiesOf } from "@storybook/react"
import FileInput from "./FileInput"

storiesOf("components|base/Forms/Input/FileInput", module).add(
  "no props",
  () => {
    return <FileInput label={"FileInput"} id="9852145" />
  }
)
