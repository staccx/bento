import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import theme from "./theme/Theme"
import Home from "./pages/Home"
import CreateInvoice from "./pages/CreateInvoice"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateInvoice} />
          </Switch>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
