import React, { Component } from "react"
import { GlobalStyle, WebFonts } from "@staccx/base"
import { Router, Switch, Route } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Page from "./components/Page/Page"
import Footer from "./components/Footer/Footer"

class App extends Component {
  render() {
    const history = createHistory()
    return (
      <Router history={history}>
        <React.Fragment>
          <GlobalStyle />
          <WebFonts />
          <Page>
            <Header />
          </Page>
          <Switch>
            <Route path={"/"} exact component={Home} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
