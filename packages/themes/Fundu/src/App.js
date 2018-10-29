import React, { Component } from "react"
import { Button } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import { FunduTheme } from "./export.js"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={FunduTheme}>
        <Button>My X Button</Button>
      </ThemeProvider>
    )
  }
}

export default App
