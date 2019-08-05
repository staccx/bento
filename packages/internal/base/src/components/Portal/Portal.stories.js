import React from "react"
import { storiesOf } from "@storybook/react"
import Portal from "./Portal"

storiesOf("components|base/Portal", module).add("test", () => {
  return <Portal label={"test"} tagName={"tagName"} variant={"Variant"} />
})
