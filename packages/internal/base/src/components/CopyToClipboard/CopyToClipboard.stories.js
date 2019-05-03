import React from "react"
import { storiesOf } from "@storybook/react"
import Copy from "./CopyToClipboardComponent"
import Text from "../Text/Text/Text"

storiesOf("components|base/CopyToClipboard", module)
  .add("No Props", () => (
    <Copy>
      {" "}
      <Text> This is some text </Text>
    </Copy>
  ))
  .add("with CopyText", () => (
    <Copy copyText={"This will be copied"}>
      <Text> This is some text</Text>{" "}
    </Copy>
  ))
