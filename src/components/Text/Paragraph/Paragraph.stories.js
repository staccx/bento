import React from "react"
import { storiesOf } from "@storybook/react"
import Paragraph from "./Paragraph"

storiesOf("Components|Base/Text/Paragraph", module)
  .add("no props", () => <Paragraph>This is a paragraph</Paragraph>)
  .add("with className", () => (
    <Paragraph className={"Test"}>This is a paragraph</Paragraph>
  ))
