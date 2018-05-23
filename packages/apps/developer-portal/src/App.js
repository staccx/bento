import React, { Component } from "react"
import { RedocStandalone } from "redoc"
import { Button } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <RedocStandalone specUrl="http://rebilly.github.io/RebillyAPI/swagger.json" />
      </ThemeProxyProvider>
    )
  }
}

export default App
