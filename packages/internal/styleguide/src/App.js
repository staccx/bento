import React, { Component } from "react"
import AlertDocumentation from "./components/Alert.documentation"
import ButtonDocumentation from "./components/Button.documentation"
import { Wrapper, CodeRenderer } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/Theme"
import theme from "./theme.js"
import * as codeGenerators from "@staccx/code-generator"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Wrapper>
          <AlertDocumentation />
          <ButtonDocumentation />
          <CodeRenderer
            code={codeGenerators.restSharp({
              summary: "summarytext",
              method: "POST",
              path: "/api/myendpoint",
              headers: { a: "b", b: "c", d: "e" },
              body: { a: "b" },
              queryParams: { q: "my-q-value" }
            })}
            language="java"
          />
        </Wrapper>
      </ThemeProxyProvider>
    )
  }
}

export default App
