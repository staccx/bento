import React from "react"
import { storiesOf } from "@storybook/react"
import WidowFix from "./WidowFix"
import docs from "./WidowFix.md"

storiesOf("Components|Base/Text/WidowFix", module)
  .add("No props", () => <WidowFix>This is a line of text</WidowFix>)
  .add(
    "Custom threshold",
    () => <WidowFix threshold={3}>This is a line of text</WidowFix>,
    {
      info: {
        text: docs
      }
    }
  )
