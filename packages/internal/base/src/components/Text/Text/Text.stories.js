import React from "react"
import { storiesOf } from "@storybook/react"
import Text from "./Text"

storiesOf("Components|Base/Text/Text", module)
  .add("no props", () => <Text>This is a text </Text>)
  .add("With className", () => <Text className={"Text"}>This is a text </Text>)
