import React from "react"
import { storiesOf } from "@storybook/react"
import Label from "./Label"
import docs from "./Label.md"

storiesOf("components|base/Forms/Label", module)
  .add("No props", () => <Label>This is a label</Label>, {
    info: {
      text: docs
    }
  })
  .add("with props", () => <Label className={"a Label"}>This is label</Label>)
