import CustomerStore from "./customerStore"
import AccountStore from "./accountStore"

const customer = new CustomerStore()
const account = new AccountStore()

export {
  customer,
  account
}