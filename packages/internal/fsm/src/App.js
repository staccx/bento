import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme/Theme"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>Here</div>
      </ThemeProvider>
    )
  }
}

export default App
