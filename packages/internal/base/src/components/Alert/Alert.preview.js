import React from "react"
import Alert from "./Alert"

const preview = {
  title: "Alert",
  category: "component",
  component: Alert,
  render: props => (
    <React.Fragment>
      # Alert type warning
      <Alert {...props} type="warning">
        This is a warning
      </Alert>
      # Alert type success
      <Alert {...props} type="success">
        This is a Success-message
      </Alert>
      # Alert type info
      <Alert {...props} type="info">
        This is an info-box!
      </Alert>
    </React.Fragment>
  )
}

export default preview
