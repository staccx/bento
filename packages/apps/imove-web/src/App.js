import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import { imoveTheme } from "@staccx/imove-theme"
import Page from "./Page"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={imoveTheme}>
        <Page />
      </ThemeProxyProvider>
    )
  }
}

export default App
