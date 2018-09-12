import React, { Component } from "react"
import { Provider } from "mobx-react"
import { Router, Route, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import { toJS } from "mobx"
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
import AccountDetail from "./pages/AccountDetail"
import Due from "./pages/Loan/Due"
import Invoice from "./pages/Loan/Invoice"
import LoanStatement from "./pages/Loan/LoanStatement"
import AccountStatement from "./pages/Deposit/AccountStatement"
import Insurance from "./pages/Loan/Insurance"
import Withdraw from "./pages/Deposit/Withdraw"

import { account, customer } from "./state"

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
                        exact
                        render={({ match }) => {
                          const acc = account.accounts.find(
                            a => a.accountId === match.params.id
                          )
                          console.log("her er kontoen du trenger", toJS(acc))
                          return (
                            <AccountDetail account={acc} history={history} />
                          )
                        }}
                      />
                      <Route path="/profile" exact component={Profile} />
                      <Route path="/logout" exact component={LoggedOut} />
                      <Route path="/prices" exact component={Prices} />
                      <Route
                        path={"/account/:id/due"}
                        exact
                        render={({ history }) => <Due history={history} />}
                      />
                      <Route
                        path={"/account/:id/invoice"}
                        exact
                        render={({ history, match }) => {
                          const acc = account.accounts.find(
                            a => a.accountId === match.params.id
                          )
                          return <Invoice history={history} account={acc} />
                        }}
                      />
                      <Route
                        path={"/account/:id/loan-statement"}
                        exact
                        render={({ history, match }) => {
                          const acc = account.accounts.find(
                            a => a.accountId === match.params.id
                          )

                          const transactions =
                            account.transactions[match.params.id]
                          return (
                            <LoanStatement
                              account={acc}
                              history={history}
                              transactions={toJS(transactions)}
                            />
                          )
                        }}
                      />
                      <Route
                        path={"/account/:id/insurance"}
                        exact
                        render={({ history }) => (
                          <Insurance history={history} />
                        )}
                      />
                      <Route
                        path={"/account/:id/account-statement"}
                        exact
                        render={({ history, match }) => {
                          const acc = account.accounts.find(
                            a => a.accountId === match.params.id
                          )

                          const transactions =
                            account.transactions[match.params.id]
                          return (
                            <AccountStatement
                              account={acc}
                              history={history}
                              transactions={toJS(transactions)}
                            />
                          )
                        }}
                      />
                      <Route
                        path={"/account/:id/withdraw"}
                        exact
                        render={({ history }) => <Withdraw history={history} />}
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
