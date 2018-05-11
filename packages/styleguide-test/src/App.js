import React, { Component } from "react"
import AlertDocumentation from "./components/Alert.documentation"
import { ThemeProvider } from "styled-components"
import { Wrapper } from "@staccx/base"
import theme from "./theme.js"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <AlertDocumentation />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
