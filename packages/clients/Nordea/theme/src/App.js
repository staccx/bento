import React, { Component } from "react"
import { Button } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { NordeaTheme } from "./export.js"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={NordeaTheme}>
        <Button>My X Button</Button>
      </ThemeProxyProvider>
    )
  }
}

export default App
