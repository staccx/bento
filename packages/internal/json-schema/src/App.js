import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "@staccx/aprila-theme"
import { Button, WebFonts, GlobalStyle } from "@staccx/base"
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
  conditional,
  onboardin1
} from "./data/schemas"

const chosen = onboardin1
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <WebFonts />
          <Schema
            schema={chosen.schema}
            uiSchema={chosen.uiSchema}
            onSubmit={console.log}
          >
            <Button type={"submit"}>Hei jeg er overskrevet</Button>
          </Schema>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
