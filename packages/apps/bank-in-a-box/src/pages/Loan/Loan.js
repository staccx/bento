import React from "react"
import PropTypes from "prop-types"
import { toJS } from "mobx/lib/mobx"
import Insurance from "./Insurance"
import Downpayment from "./Downpayment"
import LoanStatement from "./LoanStatement"
import Invoice from "./Invoice"
import Due from "./Due"
import { Route, Switch } from "react-router-dom"
import LoanDetail from "./LoanDetail"

const Account = ({ accountStore, history, match }) => {
  const accountId = match.params.id
  const acc = toJS(accountStore.accounts.find(a => a.accountId === accountId))
  return (
    <Switch>
      <Route path={`${match.url}/due`} exact component={Due} />
      <Route
        path={`${match.url}/invoice`}
        exact
        render={() => <Invoice history={history} account={acc} />}
      />
      <Route
        path={`${match.url}/downpayment`}
        exact
        render={() => <Downpayment history={history} account={acc} />}
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
        path={match.url}
        render={() => <LoanDetail account={acc} history={history} />}
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
