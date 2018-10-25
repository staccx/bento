import React, { Component } from "react"
import { GlobalStyle, WebFonts, Wrapper } from "@staccx/base"
import { Router, Switch, Route } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import Header from "./components/Header/Header"
import Home from "./pages/Home"

class App extends Component {
  render() {
    const history = createHistory()
    return (
      <Router history={history}>
        <Wrapper size={"large"}>
          <GlobalStyle />
          <WebFonts />
          <Header />
          <Switch>
            <Route path={"/"} exact component={Home} />
          </Switch>
        </Wrapper>
      </Router>
    )
  }
}

export default App
