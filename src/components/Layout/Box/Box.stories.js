import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select, text } from "@storybook/addon-knobs"
import Box from "./Box"
import docs from "./Box.md"

storiesOf("components|base/Layout/Box", module)
  .addDecorator(withKnobs)
  .add("No text", () => <Box />)
  .add("Long Text", () => (
    <Box>
      {" "}
      {text(
        "Text",
        "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello "
      )}
    </Box>
  ))
  .add("Short Text", () => <Box> {text("Text", "Hello")}</Box>)
  .add(
    "Size medium",
    () => {
      const label = "Størrelse"
      const options = {
        huge: "huge",
        large: "large",
        mediumPlus: "mediumPlus",
        medium: "medium",
        small: "small",
        tiny: "tiny",
        micro: "micro",
        flush: "flush"
      }
      const defaultValue = "medium"
      const value = select(label, options, defaultValue)
      return <Box size={value}>{text("Tekst", "Box")}</Box>
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Size huge",
    () => {
      const label = "Størrelse"
      const options = {
        huge: "huge",
        large: "large",
        mediumPlus: "mediumPlus",
        medium: "medium",
        small: "small",
        tiny: "tiny",
        micro: "micro",
        flush: "flush"
      }
      const defaultValue = "huge"
      const value = select(label, options, defaultValue)
      return <Box size={value}>{text("Tekst", "Box")}</Box>
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Size tiny",
    () => {
      const label = "Størrelse"
      const options = {
        huge: "huge",
        large: "large",
        mediumPlus: "mediumPlus",
        medium: "medium",
        small: "small",
        tiny: "tiny",
        micro: "micro",
        flush: "flush"
      }
      const defaultValue = "tiny"
      const value = select(label, options, defaultValue)
      return <Box size={value}>{text("Tekst", "Box")}</Box>
    },
    {
      info: {
        text: docs
      }
    }
  )
