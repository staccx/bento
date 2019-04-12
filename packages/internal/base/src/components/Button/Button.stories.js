import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./Button"

storiesOf("Components|Base/Button", module).add("No props", () => (
  <Button>Button</Button>
))
