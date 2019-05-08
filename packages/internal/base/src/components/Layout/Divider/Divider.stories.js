import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import docs from "./Divider.md"
import Divider from "./Divider"

storiesOf("components|base/Layout/Divider", module)
  .addDecorator(withKnobs)
  .add("No props", () => <Divider />, {
    info: {
      text: docs
    }
  })
  .add("Height at 10", () => <Divider height={number("Height", 10)} />, {
    info: {
      text: docs
    }
  })
