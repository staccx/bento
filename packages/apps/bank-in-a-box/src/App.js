import React, { Component } from "react"
import { Provider } from "mobx-react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Transitions, { backwards } from "./components/transitions/transitions"
import {
  Layout,
  LayoutItem,
  Button,
  ThemeComponent,
  GlobalStyle
} from "@staccx/base"
import { LanguageProvider } from "@staccx/i18n"
import Overview from "./pages/Overview"
import Profile from "./pages/Profile/Profile"
import ProfileEdit from "./pages/Profile/ProfileEdit"
import AnnualStatement from "./pages/Profile/AnnualStatement"
import ContractDocuments from "./pages/Profile/ContractDocuments"
import LoggedOut from "./pages/LoggedOut"
import Prices from "./pages/Prices"

import { account, customer } from "./state"
import Account from "./pages/Account/Account"
import Loan from "./pages/Loan/Loan"

class App extends Component {
  render() {
    return (
      <LanguageProvider language="nb" languages={["nb"]} texts={{}}>
        <Provider customer={customer} account={account}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <Route
                render={({ location, history }) => (
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
                        <ThemeComponent
                          tagName={"logo"}
                          inverted
                          fallback={null}
                        />
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
                          <Route
                            path={"/loan/:id"}
                            render={({ match, history }) => (
                              <Loan
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
                            render={({ history }) => (
                              <Prices history={history} />
                            )}
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
          </React.Fragment>
        </Provider>
      </LanguageProvider>
    )
  }
}

export default App
