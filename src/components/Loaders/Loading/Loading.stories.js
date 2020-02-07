import React from "react"
import { storiesOf } from "@storybook/react"
import Loading from "./Loading"
import docs from "./Loading.md"

storiesOf("components|base/DataViz/Loading", module).add(
  "no props",
  () => <Loading />,
  {
    info: {
      text: docs
    }
  }
)
