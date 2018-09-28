import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { Router, Route, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import Transitions from "./components/transitions/transitions"
import { imoveTheme } from "@staccx/imove-theme"
import Onboarding from "./pages/Onboarding"
import Header from "./components/Header"
import Home from "./pages/Home"
import Sell from "./pages/Sell"
import SellConfirmation from "./pages/SellConfirmation"

class App extends Component {
  render() {
    const history = createHistory()
    return (
      <ThemeProxyProvider theme={imoveTheme}>
        <Router history={history}>
          <Route
            render={({ location }) => (
              <div>
                <Header />
                <Transitions pageKey={location.key} {...location.state}>
                  <Wrapper size="small">
                    <Switch location={location}>
                      <Route path="/onboarding" exact component={Onboarding} />
                      <Route path="/" exact component={Home} />
                      <Route path="/sell" exact component={Sell} />
                      <Route
                        path="/sell/confirmation"
                        exact
                        component={SellConfirmation}
                      />
                    </Switch>
                  </Wrapper>
                </Transitions>
              </div>
            )}
          />
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
