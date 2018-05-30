import { action, observable } from "mobx"
import { getAccount, getTransactions } from "./api"

class AccountStore {
  @observable transactions = []

  @observable selectedAccount = {}
  @observable earned = 2776.944

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
