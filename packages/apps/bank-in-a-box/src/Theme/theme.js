import theme from "@staccx/norefjell-theme"
import { backwardsStyle } from "../components/transitions/backwards"
import { forwardsStyle } from "../components/transitions/forwards"
import { TransactionListButtonStyle } from "./Shared/Transaction.ExpandButton"
import { ExpandListItemButtonStyle } from "./Shared/ExpandListItem.Expanded"

const BankTheme = theme
  .add([TransactionListButtonStyle, ExpandListItemButtonStyle])
  .appendGlobal(backwardsStyle)
  .appendGlobal(forwardsStyle)

export default BankTheme
