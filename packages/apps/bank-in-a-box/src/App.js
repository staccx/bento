import React, { Component } from "react"
import { Provider } from "mobx-react"
import { Router, Route, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import Transitions, { backwards } from "./components/transitions/transitions"
import { ThemeComponent } from "@staccx/theme"
import { Layout, LayoutItem, Button } from "@staccx/base"
import Overview from "./pages/Overview"
import Profile from "./pages/Profile/Profile"
import ProfileEdit from "./pages/Profile/ProfileEdit"
import AnnualStatement from "./pages/Profile/AnnualStatement"
import ContractDocuments from "./pages/Profile/ContractDocuments"
import LoggedOut from "./pages/LoggedOut"
import Prices from "./pages/Prices"

import { account, customer } from "./state"
import Account from "./pages/Account"

class App extends Component {
  render() {
    const history = createHistory()

    return (
      <Provider customer={customer} account={account}>
        <Router history={history}>
          <Route
            render={({ location }) => (
              <Layout variant="bibMainLayout">
                <LayoutItem area="logo">
                  <Button
                    variant="styleless"
                    onClick={() =>
                      history.push({
                        pathname: "/",
                        state: backwards
                      })
                    }
                  >
                    <ThemeComponent tagName={"logo"} inverted fallback={null} />
                  </Button>
                </LayoutItem>
                <LayoutItem area="main">
                  <Transitions pageKey={location.key} {...location.state}>
                    <Switch location={location}>
                      <Route
                        path="/"
                        exact
                        render={({ history }) => (
                          <Overview
                            history={history}
                            accounts={account.accounts}
                          />
                        )}
                      />
                      <Route
                        path={"/account/:id"}
                        render={({ match, history }) => (
                          <Account
                            accountStore={account}
                            match={match}
                            history={history}
                          />
                        )}
                      />
                      <Route path="/profile" exact component={Profile} />
                      <Route path="/logout" exact component={LoggedOut} />
                      <Route
                        path="/prices"
                        exact
                        render={({ history }) => <Prices history={history} />}
                      />

                      <Route
                        path={"/profile/edit"}
                        exact
                        render={({ history }) => (
                          <ProfileEdit history={history} />
                        )}
                      />
                      <Route
                        path={"/profile/annual-statement"}
                        exact
                        render={({ history }) => (
                          <AnnualStatement history={history} />
                        )}
                      />
                      <Route
                        path={"/profile/contract-documents"}
                        exact
                        render={({ history }) => (
                          <ContractDocuments history={history} />
                        )}
                      />
                    </Switch>
                  </Transitions>
                </LayoutItem>
                <LayoutItem area="footer">
                  <ThemeComponent tagName={"footer"} />
                </LayoutItem>
              </Layout>
            )}
          />
        </Router>
      </Provider>
    )
  }
}

export default App
