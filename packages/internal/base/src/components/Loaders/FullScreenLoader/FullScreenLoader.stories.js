import React from "react"
import { storiesOf } from "@storybook/react"
import FullScreenLoader from "./FullScreenLoader"

storiesOf("components|base/FullScreenLoader", module)
  .add("array as message", () => {
    return <FullScreenLoader messages={["Loading"]} />
  })

  .add("string as message", () => {
    return <FullScreenLoader messages={"Loading"} />
  })
