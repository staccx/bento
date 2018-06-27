import { Theme } from "@staccx/theme"
import { BoxStyling } from "./theme.docs.Boxes"
import { HeadingStyling } from "./theme.docs.Headings"
import { ListStyling } from "./theme.docs.Lists"
import { LayoutStyling } from "./theme.docs.Layouts"
import { TextStyling } from "./theme.docs.Texts"

const wrapper = {
  documentation: "1440px"
}

const theme = new Theme({ wrapper })
  .add(BoxStyling)
  .add(HeadingStyling)
  .add(ListStyling)
  .add(LayoutStyling)
  .add(TextStyling)

export default theme
