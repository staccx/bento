import React from "react"
import { storiesOf } from "@storybook/react"
import Legend from "./Legend"
import docs from "./Legend.md"

storiesOf("Components|Base/Forms/Legend").add(
  "Classname",
  () => <Legend className="Test">This is a Legend</Legend>,
  {
    info: {
      text: docs
    }
  }
)
