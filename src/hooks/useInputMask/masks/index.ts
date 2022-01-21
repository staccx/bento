import { baseMask } from "./base"
import { accountMask } from "./account"
import { creditCardMask } from "./creditCard"
import { currencyMask } from "./currency"
import { nationalIdMask } from "./nationalId"
import { phoneMask } from "./phone"
import { postalCodeMask } from "./postalCode"

const resolveMask = mode => {
  if (!mode) {
    return () => null // should not be masked
  }
  switch (mode.toLowerCase()) {
    case "account":
      console.debug("Choosing the account mask")
      return accountMask
    case "creditcard":
      console.debug("Choosing the credit card mask")
      return creditCardMask
    case "currency":
      console.debug("Choosing the currency mask")
      return currencyMask
    case "nationalid":
      console.debug("Choosing the national id mask")
      return nationalIdMask
    case "phone":
      console.debug("Choosing the phone mask")
      return phoneMask
    case "postal":
    case "postalcode":
      console.debug("Choosing the postalCode mask")
      return postalCodeMask
    case "custom":
    default:
      console.warn("Mode not supported:", mode)
      return baseMask
  }
}
export { baseMask, accountMask, resolveMask }
