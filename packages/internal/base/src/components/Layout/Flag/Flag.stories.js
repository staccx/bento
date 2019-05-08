import React from "react"
import { storiesOf } from "@storybook/react"
import Flag from "./Flag"
import docs from "./Flag.md"

storiesOf("components|base/Layout/Flag", module)
  .add("No props", () => <Flag />, { info: { text: docs } })
  .add(
    "With img",
    () => (
      <Flag
        responsive={800}
        img={
          <img
            src="https://www.w3schools.com/w3css/img_snowtops.jpg"
            width="100"
            height="100"
          />
        }
      />
    ),
    { info: { text: docs } }
  )
