import React, { Component } from "react"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import routes from "./data/routes"
import Transitions from "./components/transitions/transitions"
import Header from "./components/Header/Header"
import Notifications from "./components/Notifications"
import MobileMenu from "./components/MobileMenu"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    console.log("toggleMenu")
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    // TODO: Denne må trigges når du klikker på elementer i menyen ☝️
  }

  render() {
    const history = createHistory()
    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <div>
              <Notifications />
              <MobileMenu
                menuOpen={this.state.menuOpen}
                onClick={() => this.toggleMenu()}
              />
              <Header onClick={() => this.toggleMenu()} />
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
    )
  }
}

export default App
