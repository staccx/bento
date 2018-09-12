import React from "react"
import PropTypes from "prop-types"
import { toJS } from "mobx/lib/mobx"
import Withdraw from "./Deposit/Withdraw"
import AccountStatement from "./Deposit/AccountStatement"
import Insurance from "./Loan/Insurance"
import LoanStatement from "./Loan/LoanStatement"
import Invoice from "./Loan/Invoice"
import Due from "./Loan/Due"
import { Route, Switch } from "react-router-dom"
import AccountDetail from "./AccountDetail"

const Account = ({ accountStore, history, match }) => {
  const accountId = match.params.id
  console.log("finding account based on ", accountId, accountStore.transactions)
  const acc = toJS(accountStore.accounts.find(a => a.accountId === accountId))

  console.log(acc)
  return (
    <Switch>
      <Route path={`${match.url}/due`} exact component={Due} />
      <Route
        path={`${match.url}/invoice`}
        exact
        render={() => <Invoice history={history} account={acc} />}
      />
      <Route
        path={`${match.url}/loan-statement`}
        exact
        render={() => <LoanStatement account={acc} history={history} />}
      />
      <Route
        path={`${match.url}/insurance`}
        exact
        render={() => <Insurance history={history} />}
      />
      <Route
        path={`${match.url}/account-statement`}
        exact
        render={() => <AccountStatement account={acc} history={history} />}
      />
      <Route
        path={`${match.url}/withdraw`}
        exact
        render={({ history }) => <Withdraw history={history} />}
      />

      <Route
        path={match.url}
        render={() => <AccountDetail account={acc} history={history} />}
      />
    </Switch>
  )
}

Account.propTypes = {
  accountStore: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
  match: PropTypes.any.isRequired
}

export default Account
