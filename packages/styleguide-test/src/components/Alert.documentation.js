import React from "react"
import { Alert, AlertStyles } from "@staccx/base"
import Documentation from "./Documentation"
import ComponentDocumentation from "./ComponentDocumentation"
import TextDocumentation from "./TextDocumentation"

const AlertDocumentation = () => (
  <Documentation title="Alert">
    <TextDocumentation
      component={<Alert />}
      themify={AlertStyles}
      themifyDescription={[
        "Styling for type=info",
        "Styling for type=warning",
        "Styling for type=success",
        "Icon for type=warning",
        "Icon for type=info",
        "Icon for type=success",
        "Styling for all alert-boxes"
      ]}
    >
      Provide contextual feedback messages for typical user actions with the
      handful of available and flexible alert messages.
    </TextDocumentation>
    <ComponentDocumentation>
      # Alert type warning
      <Alert type="warning">This is a warning</Alert>
      # Alert type success
      <Alert type="success">This is a Success-message</Alert>
      # Alert type info
      <Alert type="info">This is an info-box!</Alert>
    </ComponentDocumentation>
  </Documentation>
)

export default AlertDocumentation
