import React from "react"
import { storiesOf } from "@storybook/react"
import Alert from "./Alert"

storiesOf("Base/Components/Alert", module)
  .add("No props", () => <Alert />)
  .add("Warning", () => <Alert type={"warning"} />)
  .add("Info", () => <Alert type={"info"} />)
  .add("Success", () => <Alert type={"success"} />)
  .add("Side by side", () => (
    <div>
      <Alert type={"success"} />
      <Alert type={"info"} />
      <Alert type={"warning"} />
    </div>
  ))
