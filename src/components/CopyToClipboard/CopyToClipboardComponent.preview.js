import React from "react"
import Copy from "./CopyToClipboard"
import Text from "../Text/Text/Text"

export default {
  title: "Copy to clipboard component",
  category: "Components/Utilites",
  tags: ["utility"],
  component: Copy,
  render: props => (
    <Copy copyText="OmgRoflLmao">
      <Text>This is the text you will have in clipboard: OmgRoflLmao</Text>
    </Copy>
  )
}
