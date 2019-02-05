import React from "react"
import PropTypes from "prop-types"
import { toJS } from "mobx/lib/mobx"
import Withdraw from "./Withdraw"
import AccountStatement from "./AccountStatement"
import { Route, Switch } from "react-router-dom"
import AccountDetail from "./AccountDetail"

const Account = ({ accountStore, history, match }) => {
  const accountId = match.params.id
  console.log("finding account based on ", accountId, accountStore.transactions)
  const acc = toJS(accountStore.accounts.find(a => a.accountId === accountId))

  return (
    <Switch>
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
