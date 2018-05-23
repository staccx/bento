import React, { Component } from "react"
import { RedocStandalone } from "redoc"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <RedocStandalone specUrl="https://demo.quantfol.io/swagger/v1/swagger.json" />
      </ThemeProxyProvider>
    )
  }
}

export default App
