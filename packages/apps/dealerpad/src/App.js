import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"
import routes from "./data/routes"
import Transitions from "./components/transitions/transitions"

import Header from "./components/Header/Header"
import Notifications from "./components/Notifications"

class App extends Component {
  render() {
    const history = createHistory()
    return (
      <ThemeProxyProvider theme={theme}>
        <Router history={history}>
          <Route
            render={({ location }) => (
              <div>
                <Notifications />
                <Header />
                <Transitions pageKey={location.key} {...location.state}>
                  <Switch location={location}>
                    {routes.map(page => (
                      <Route
                        exact={page.exact}
                        path={page.path}
                        component={page.component}
                        key={page.path}
                      />
                    ))}
                    <Redirect from="/" exact to="/news" />
                  </Switch>
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
