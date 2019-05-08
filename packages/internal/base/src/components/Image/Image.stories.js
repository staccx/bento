import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import docs from "./Image.md"
import Image from "./Image"

storiesOf("components|base/Image", module)
  .addDecorator(withKnobs)
  .add(
    "image",
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
