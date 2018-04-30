import {observable} from "mobx"
import transactions from '../data/transactions'

class AccountStore {
  @observable transactions = transactions
}

export default AccountStore