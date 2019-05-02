import React from "react"
import { storiesOf } from "@storybook/react"
import Heading from "./Heading"
import docs from "./Heading.md"

storiesOf("Components|Base/Text/Heading", module)
  .add("No props", () => <Heading>This is a header </Heading>)
  .add("Level 1", () => <Heading level={1}>This is a header </Heading>, {
    info: {
      text: docs
    }
  })
  .add("level 2", () => <Heading level={2}>This is a header </Heading>, {
    info: {
      text: docs
    }
  })
  .add("level 3", () => <Heading level={3}>This is a header </Heading>, {
    info: {
      text: docs
    }
  })
  .add("level 4", () => <Heading level={4}>This is a header </Heading>, {
    info: {
      text: docs
    }
  })
  .add("level 5", () => <Heading level={5}>This is a header </Heading>, {
    info: {
      text: docs
    }
  })
  .add("level 6", () => <Heading level={6}>This is a header </Heading>, {
    info: {
      text: docs
    }
  })
