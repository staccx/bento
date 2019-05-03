import React from "react"
import { storiesOf } from "@storybook/react"
import Caret from "./Caret"
import CaretRight from "./CaretRight"
import Check from "./Check"
import Close from "./Close"
import Info from "./Info"
import QuestionMark from "./QuestionMark"
import Success from "./Success"
import Upload from "./Upload"
import Warning from "./Warning"
import Label from "../Forms/Label/Label"

storiesOf("components|base/Icons", module).add("Caret", () => {
  return (
    <div>
      <Label>Caret </Label>
      <Caret />
      <Label>CaretRight</Label>
      <CaretRight />
      <Label>Check</Label>
      <Check />
      <Label>Close</Label>
      <Close />
      <Label>Info</Label>
      <Info />
      <Label>QuestionMark</Label>
      <QuestionMark />
      <Label>Success</Label>
      <Success />
      <Label>Upload</Label>
      <Upload />
      <Label>Warning</Label>
      <Warning />
    </div>
  )
})
