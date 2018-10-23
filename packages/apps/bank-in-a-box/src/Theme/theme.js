import theme from "@staccx/norefjell-theme"
import { backwardsStyle } from "../components/transitions/backwards"
import { forwardsStyle } from "../components/transitions/forwards"
import { TransactionListButtonStyle } from "./Shared/Transaction.ExpandButton"
import { ExpandListItemButtonStyle } from "./Shared/ExpandListItem.Expanded"
import { theming } from "@staccx/base"

const BankTheme = theme.add([
  TransactionListButtonStyle,
  ExpandListItemButtonStyle,
  backwardsStyle,
  forwardsStyle,
  theming.createGlobal({ reset: theme.reset })
])

export default BankTheme
