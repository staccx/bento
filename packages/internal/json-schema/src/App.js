import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "@staccx/aprila-theme"
import Schema from "./components/Schema"

import {
  nested,
  simple,
  arrays,
  references,
  custom,
  errors,
  large,
  alternatives,
  conditional
} from "./data/schemas"

const chosen = conditional
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Schema
          schema={chosen.schema}
          uiSchema={chosen.uiSchema}
          onSubmit={console.log}
        />
      </ThemeProvider>
    )
  }
}

export default App
