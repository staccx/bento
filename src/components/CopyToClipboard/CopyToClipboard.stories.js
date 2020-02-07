import React from "react"
import { storiesOf } from "@storybook/react"
import Copy from "./CopyToClipboard"
import Text from "../Text/Text/Text"
import docs from "./CopyToClipboard.md"

storiesOf("components|base/CopyToClipboard", module)
  .add(
    "No Props",
    () => (
      <Copy>
        {" "}
        <Text> This is some text </Text>
      </Copy>
    ),
    { info: { text: docs } }
  )
  .add(
    "with CopyText",
    () => (
      <Copy copyText="This is changed">
        <Text> This is some text</Text>{" "}
      </Copy>
    ),
    { info: { text: docs } }
  )
