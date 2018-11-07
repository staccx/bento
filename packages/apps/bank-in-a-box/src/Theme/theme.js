import theme from "@staccx/norefjell-theme"
import { backwardsStyle } from "../components/transitions/backwards"
import { forwardsStyle } from "../components/transitions/forwards"
import { theming } from "@staccx/base"

const BankTheme = theme.add([
  backwardsStyle,
  forwardsStyle,
  theming.createGlobal({ reset: theme.reset })
])

export default BankTheme
