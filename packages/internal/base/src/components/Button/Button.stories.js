import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import Button from "./Button"
import docs from "./Button.md"

storiesOf("Components|Base/Button", module)
  .addDecorator(withKnobs)
  .add("No props", () => <Button>Button</Button>, {
    info: {
      text: docs
    }
  })
  .add(
    "log",
    () => (
      <Button onClick={() => console.log("Knappen er trykket")}>
        {" "}
        {text("Label", "Hello Storybook")}
      </Button>
    ),
    {
      info: {
        text: docs
      }
    }
  )
