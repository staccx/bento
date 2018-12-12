import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "@staccx/aprila-theme"
import Schema from "./components/Schema"

import { nested, simple } from "./data/schemas"

const chosen = nested
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Schema schema={chosen.schema} uiSchema={chosen.uiSchema} />
      </ThemeProvider>
    )
  }
}

export default App
