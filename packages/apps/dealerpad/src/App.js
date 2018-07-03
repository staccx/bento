import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import theme from "./theme/Theme"
import routes from "./data/routes"

import Header from "./components/Header/Header"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              {routes.map(page => (
                <Route
                  exact={page.exact}
                  path={page.path}
                  render={() => page.component}
                  key={page.path}
                />
              ))}
              <Redirect from="/" exact to="/news" />
            </Switch>
          </div>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
