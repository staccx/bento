import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Transitions from "./components/transitions/transitions"
import { imoveTheme } from "@staccx/imove-theme"
import Onboarding from "./pages/Onboarding"
// import Header from "./components/Header"
import MyCar from "./pages/MyCar"
import Sell from "./pages/Sell"
import SellConfirmation from "./pages/SellConfirmation"
import WaitingList from "./pages/WaitingList"
import WaitingListConfirmation from "./pages/WaitingListConfirmation"
import Cars from "./pages/Cars"
import OrderCarDetail from "./pages/Order/Order.CarDetail"
import OrderBook from "./pages/Order/Order.Book"
import OrderConfirm from "./pages/Order/Order.Confirm"
import Menu from "./components/Menu/Menu"
import Profile from "./pages/Profile"
import ProfileEdit from "./pages/ProfileEdit"
import End from "./pages/End"
import EndConfirmation from "./pages/EndConfirmation"
import LogIn from "./pages/LogIn"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={imoveTheme}>
        <Router>
          <Route
            render={({ location, match }) => (
              <div>
                {/* <Header /> */}
                <Menu />
                <Transitions pageKey={location.key} {...location.state}>
                  <Wrapper size="small">
                    <Switch location={location}>
                      <Route path="/" exact component={LogIn} />
                      <Route path="/onboarding" exact component={Onboarding} />
                      <Route path="/my-car" exact component={MyCar} />
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
                      <Route path="/cars" exact component={Cars} />
                      <Route
                        path="/car/:chassisNumber"
                        match={match}
                        exact
                        component={OrderCarDetail}
                      />
                      <Route
                        path="/car/:chassisNumber/book"
                        match={match}
                        exact
                        component={OrderBook}
                      />
                      <Route
                        path="/car/:chassisNumber/confirm"
                        match={match}
                        exact
                        component={OrderConfirm}
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
