import { baseMask } from "./base"
import { accountMask } from "./account"
import { creditCardMask } from "./creditCard"

const resolveMask = (mode, logger = null) => {
  if (!mode) {
    return baseMask
  }
  switch (mode) {
    case "account":
      logger?.debug("Choosing the account mask")
      return accountMask
    case "creditcard":
      logger?.debug("Choosing the credit card mask")
      return creditCardMask
    default:
      logger?.warn("Mode not supported:", mode)
      return baseMask
  }
}
export { baseMask, accountMask, resolveMask }
