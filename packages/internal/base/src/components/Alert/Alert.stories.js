import React from "react"
import { storiesOf } from "@storybook/react"
import Alert from "./Alert"
import Layout from "../Layout/Layout/Layout"
import docs from "./Alert.md"

storiesOf("Components|Base/Alert", module)
  .add("No props", () => <Alert>This is an alert with no props</Alert>, {
    info: { text: docs }
  })
  .add("Warning", () => <Alert type={"warning"}>This is a warning</Alert>, {
    info: { text: docs }
  })
  .add("Info", () => <Alert type={"info"}>This is an info</Alert>, {
    info: { text: docs }
  })
  .add("Success", () => <Alert type={"success"}>This is a success</Alert>, {
    info: { text: docs }
  })
  .add(
    "All",
    () => (
      <Layout>
        <Alert type={"success"}>This is a success</Alert>
        <Alert type={"info"}>This is an info</Alert>
        <Alert type={"warning"}>This is a warning</Alert>
      </Layout>
    ),
    { info: { text: docs } }
  )
