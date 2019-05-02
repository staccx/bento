import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./Button"
import docs from "./Button.md"

storiesOf("Components|Base/Button", module)
  .add("No props", () => <Button>Button</Button>, {
    info: {
      text: docs
    }
  })
  .add(
    "log",
    () => (
      <Button onClick={() => console.log("Knappen er trykket")}>Trykk</Button>
    ),
    {
      info: {
        text: docs
      }
    }
  )
