import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"
import CreateInvoice from "./pages/CreateInvoice"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Router>
          <CreateInvoice />
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
