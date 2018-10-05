import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Transitions from "./components/transitions/transitions"
import { imoveTheme } from "@staccx/imove-theme"
import Onboarding from "./pages/Onboarding"
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
            render={({ location, match }) => {
              console.log(location)
              return (
                <div>
                  {/* <Header /> */}
                  <Menu />
                  <Transitions pageKey={location.key} {...location.state}>
                    <Switch location={location}>
                      <Route path="/app/" exact component={LogIn} />
                      <Route
                        path="/app/onboarding"
                        exact
                        component={Onboarding}
                      />
                      <Route path="/app/my-car" exact component={MyCar} />
                      <Route path="/app/sell" exact component={Sell} />
                      <Route
                        path="/app/sell/confirmation"
                        exact
                        component={SellConfirmation}
                      />
                      <Route
                        path="/app/waiting-list"
                        exact
                        component={WaitingList}
                      />
                      <Route
                        path="/app/waiting-list/confirmation"
                        exact
                        component={WaitingListConfirmation}
                      />
                      <Route path="/app/cars" exact component={Cars} />
                      <Route
                        path="/app/car/:chassisNumber"
                        match={match}
                        exact
                        component={OrderCarDetail}
                      />
                      <Route
                        path="/app/car/:chassisNumber/book"
                        match={match}
                        exact
                        component={OrderBook}
                      />
                      <Route
                        path="/app/car/:chassisNumber/confirm"
                        match={match}
                        exact
                        component={OrderConfirm}
                      />
                      <Route path="/app/profile" exact component={Profile} />
                      <Route
                        path="/app/profile/edit"
                        exact
                        component={ProfileEdit}
                      />
                      <Route path="/app/end" exact component={End} />
                      <Route
                        path="/app/end/confirmation"
                        exact
                        component={EndConfirmation}
                      />
                      <Route
                        path="/app"
                        render={() => (
                          <div>
                            <h1>404</h1>
                            <p>No content here (yet)</p>
                            <Link to={"/app"}>Please log in to the app</Link>
                          </div>
                        )}
                      />
                      <Route
                        path="/"
                        render={() => (
                          <div>
                            This is where the landing pages lives.{" "}
                            <Link to={"/app"}>Please log in to the app</Link>
                          </div>
                        )}
                      />
                    </Switch>
                  </Transitions>
                </div>
              )
            }}
          />
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
