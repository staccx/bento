import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import theme from "./theme/Theme"

import Home from "./pages/Home"
import NewCase from "./pages/NewCase"
import MySales from "./pages/MySales"
import Case from "./pages/Case"

import Header from "./components/Header/Header"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/new-case" component={NewCase} exact />
              <Route path="/my-sales" component={MySales} exact />
              <Route path="/sales/:caseId" omponent={Case} />
            </Switch>
          </div>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
