import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import ApiRenderer from "./components/ApiRenderer"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <div>
        <ApiRenderer url={"https://demo.quantfol.io/swagger/v1/swagger.json"} />
        <ApiRenderer url={"http://petstore.swagger.io/v2/swagger.json"} />
        </div>
      </ThemeProxyProvider>
    )
  }
}

export default App
