import React from "react"
import { storiesOf } from "@storybook/react"
import Anchor from "./Anchor"
import docs from "./Anchor.md"

storiesOf("Components|Base/Anchor", module)
  .add("No props", () => <Anchor>Anchor</Anchor>, {
    info: {
      text: docs
    }
  })
  .add("With string input", () => <Anchor>This is a string</Anchor>, {
    info: {
      text: docs
    }
  })
  .add("with a-tag as input", () => (
    <Anchor>
      <a> this is a link</a>
    </Anchor>
  ))
