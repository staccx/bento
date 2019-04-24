import React from "react"
import { storiesOf } from "@storybook/react"
import Alert from "./Alert"
import Layout from "../Layout/Layout/Layout"

storiesOf("Components|Base/Alert", module)
  .add("No props", () => <Alert>This is an alert with no props</Alert>)
  .add("Warning", () => <Alert type={"warning"}>This is a warning</Alert>)
  .add("Info", () => <Alert type={"info"}>This is an info</Alert>)
  .add("Success", () => <Alert type={"success"}>This is a success</Alert>)
  .add("All", () => (
    <Layout>
      <Alert type={"success"}>This is a success</Alert>
      <Alert type={"info"}>This is an info</Alert>
      <Alert type={"warning"}>This is a warning</Alert>
    </Layout>
  ))
