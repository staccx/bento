import React, { Component } from "react"
import AlertDocumentation from "./components/Alert.documentation"
import ButtonDocumentation from "./components/Button.documentation"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/Theme"
import theme from "./theme.js"
import CodeRenderer from "./components/CodeRenderer"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Wrapper>
          <AlertDocumentation />
          <ButtonDocumentation />
          <CodeRenderer />
        </Wrapper>
      </ThemeProxyProvider>
    )
  }
}

export default App
