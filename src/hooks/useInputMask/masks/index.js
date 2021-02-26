import { baseMask } from "./base"
import { accountMask } from "./account"
import { creditCardMask } from "./creditCard"
import { currencyMask } from "./currency"
import { nationalIdMask } from "./nationalId"
import { phoneMask } from "./phone"
import { postalCodeMask } from "./postalCode"

const resolveMask = (mode, logger = null) => {
  if (!mode) {
    return () => null // should not be masked
  }
  switch (mode.toLowerCase()) {
    case "account":
      logger?.debug("Choosing the account mask")
      return accountMask
    case "creditcard":
      logger?.debug("Choosing the credit card mask")
      return creditCardMask
    case "currency":
      logger?.debug("Choosing the currency mask")
      return currencyMask
    case "nationalid":
      logger?.debug("Choosing the national id mask")
      return nationalIdMask
    case "phone":
      logger?.debug("Choosing the phone mask")
      return phoneMask
    case "postal":
    case "postalcode":
      logger?.debug("Choosing the postalCode mask")
      return postalCodeMask
    case "custom":
    default:
      logger?.warn("Mode not supported:", mode)
      return baseMask
  }
}
export { baseMask, accountMask, resolveMask }
