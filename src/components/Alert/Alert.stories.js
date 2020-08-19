import React from "react"
import Alert from "./Alert"

export default {
  title: "New/Components/Alert",
  component: Alert
}

export const AlertView = args => (
  <Alert {...args}> Something is happening? </Alert>
)
AlertView.args = { type: "warning" }
