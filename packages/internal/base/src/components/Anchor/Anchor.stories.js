import React from "react"
import { storiesOf } from "@storybook/react"
import Anchor from "./Anchor"
import docs from "./Anchor.md"

storiesOf("Components|Base/Anchor", module)
  .add("Without href", () => <Anchor>Anchor</Anchor>, {
    info: {
      text: docs
    }
  })
  .add(
    "With href",
    () => (
      <Anchor className="Anchor" href="https://www.nrk.no">
        Anchor
      </Anchor>
    ),
    {
      info: {
        text: docs
      }
    }
  )
