import React, { Component } from "react"
import { Button } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./export.js"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Button>My X Button</Button>
      </ThemeProxyProvider>
    )
  }
}

export default App