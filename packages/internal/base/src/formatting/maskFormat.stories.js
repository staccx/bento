import React from "react"
import { storiesOf } from "@storybook/react"
import maskFormat from "./maskFormat"
import { Text } from "./__storyComponents"

storiesOf("Functions|Formatting/Mask Format", module)
  .add("No arguments", () => <Text>{maskFormat("92284082")}</Text>)
  .add("Passing a mask", () => (
    <Text>{maskFormat("92284082", "XXXX XXXX")}</Text>
  ))
  .add("Passing a mask and prefix", () => (
    <Text>{maskFormat("92284082", "tlf: XXX XX XXX")}</Text>
  ))
  .add("Custom delimiter", () => (
    <Text>{maskFormat("92284082", "XXX-XX-XXX")}</Text>
  ))
