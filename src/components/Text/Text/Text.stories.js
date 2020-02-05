import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, number } from "@storybook/addon-knobs"
import Text from "./Text"

storiesOf("Components|Base/Text/Text", module)
  .addDecorator(withKnobs)
  .add("no props", () => <Text>This is a text </Text>)

  .add("With className", () => {
    const nu = number("value", 1)
    const className = text("className", "Test")

    const content = `i Am ${className}`
    return (
      <div>
        {content}
        {nu}
      </div>
    )
  })
