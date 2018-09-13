import { action, observable } from "mobx"
import { getAccount, getTransactions } from "./api"
import fakeAccounts from "../data/accounts"
import fakeTransactions from "../data/transactions"

class AccountStore {
  @observable
  accounts = fakeAccounts.map(account => ({
    ...account,
    transactions: fakeTransactions[account.accountNo]
  }))

  @observable
  selectedAccount = {}
  @observable
  earned = 2776.944

  @action
  setSelectedAccount = accountId =>
    getAccount(accountId)
      .then(account => {
        this.selectedAccount = account
        return accountId
      })
      .then(this.setTransactions)

  @action
  setTransactions = accountId =>
    getTransactions(accountId).then(
      transactions => (this.transactions = transactions)
    )

  constructor() {
    this.setSelectedAccount("34551524578")
  }
}

export default AccountStore
