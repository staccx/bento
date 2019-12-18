import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, select } from "@storybook/addon-knobs"
import docs from "./Image.md"
import Image from "./Image"

storiesOf("components|base/Image", module)
  .addDecorator(withKnobs)
  .add(
    "Image",
    () => {
      const label = "Width"
      const defaultValue = "1"
      const options = {
        min: 1,
        max: 300,
        step: 5
      }
      const value = number(label, defaultValue, options)
      return (
        <Image
          src="https://www.w3schools.com/w3css/img_snowtops.jpg"
          width={value}
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Round",
    () => {
      const label = "Width"
      const defaultValue = "1"
      const options = {
        min: 1,
        max: 300,
        step: 5
      }
      const value = number(label, defaultValue, options)
      return (
        <Image
          src="https://www.w3schools.com/w3css/img_snowtops.jpg"
          width={value}
          round
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
  .add(
    "Img size small",
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
      const defaultValue = "small"
      const value = select(label, options, defaultValue)
      return (
        <Image
          src="https://www.w3schools.com/w3css/img_snowtops.jpg"
          size={value}
        />
      )
    },
    {
      info: {
        text: docs
      }
    }
  )
