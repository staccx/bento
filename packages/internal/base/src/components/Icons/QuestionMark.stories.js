import React from "react"
import { storiesOf } from "@storybook/react"
import QuestionMark from "./QuestionMark"

storiesOf("components|base/Icons/QuestionMark", module).add(
  "QuestionMark",
  () => {
    return <QuestionMark />
  }
)
