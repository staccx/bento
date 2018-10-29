import React, { Component } from "react"
import { Button } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import { imoveTheme } from "./export.js"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={imoveTheme}>
        <Button>My X Button</Button>
      </ThemeProvider>
    )
  }
}

export default App
