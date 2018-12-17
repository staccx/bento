import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "@staccx/aprila-theme"
import { Button } from "@staccx/base"
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
        >
          <Button type={"submit"}>Hei jeg er overskrevet</Button>
        </Schema>
      </ThemeProvider>
    )
  }
}

export default App
