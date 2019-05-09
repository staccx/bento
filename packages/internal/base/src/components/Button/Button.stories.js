import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import Button from "./Button"
import docs from "./Button.md"

storiesOf("Components|Base/Button", module)
  .addDecorator(withKnobs)
  .add("No text", () => <Button />, {
    info: {
      text: docs
    }
  })
  .add(
    "Log",
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
  .add(
    "Long text",
    () => (
      <Button>
        ButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButton
      </Button>
    ),
    {
      info: {
        text: docs
      }
    }
  )
