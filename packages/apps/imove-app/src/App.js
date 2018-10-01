import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Transitions from "./components/transitions/transitions"
import { imoveTheme } from "@staccx/imove-theme"
import Onboarding from "./pages/Onboarding"
// import Header from "./components/Header"
import Home from "./pages/Home"
import Sell from "./pages/Sell"
import SellConfirmation from "./pages/SellConfirmation"
import WaitingList from "./pages/WaitingList"
import WaitingListConfirmation from "./pages/WaitingListConfirmation"
import Menu from "./components/Menu/Menu"
import Profile from "./pages/Profile"
import ProfileEdit from "./pages/ProfileEdit"
import End from "./pages/End"
import EndConfirmation from "./pages/EndConfirmation"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={imoveTheme}>
        <Router>
          <Route
            render={({ location }) => (
              <div>
                {/* <Header /> */}
                <Menu />
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
                      <Route
                        path="/waiting-list"
                        exact
                        component={WaitingList}
                      />
                      <Route
                        path="/waiting-list/confirmation"
                        exact
                        component={WaitingListConfirmation}
                      />
                      <Route path="/profile" exact component={Profile} />
                      <Route
                        path="/profile/edit"
                        exact
                        component={ProfileEdit}
                      />
                      <Route path="/end" exact component={End} />
                      <Route
                        path="/end/confirmation"
                        exact
                        component={EndConfirmation}
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
