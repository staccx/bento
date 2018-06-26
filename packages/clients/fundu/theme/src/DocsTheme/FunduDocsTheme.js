import { Theme } from "@staccx/theme"
import { BoxStyling } from "./theme.docs.Boxes"
import { HeadingStyling } from "./theme.docs.Headings"
import { ListStyling } from "./theme.docs.Lists"

const theme = new Theme()
  .add(BoxStyling)
  .add(HeadingStyling)
  .add(ListStyling)

export default theme
