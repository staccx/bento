import { Theme } from "@staccx/theme"
import { BoxStyling } from "./theme.docs.Boxes"
import { HeadingStyling } from "./theme.docs.Headings"
import { ListStyling, SplitListItemStyling } from "./theme.docs.Lists"
import { LayoutStyling } from "./theme.docs.Layouts"
import { TextStyling } from "./theme.docs.Texts"
import { InputStyling, RadioPillItemStyling } from "./theme.docs.Inputs"
import { TableStyling } from "./theme.docs.Tables"

const wrapper = {
  documentation: "1440px"
}

const color = {
  codeBackground: "#2e3440",
  codeForeground: "#d8dee9",
  codeComment: "#5F6C85",
  codeString: "#A3BE8C",
  codeKeyword: "#81A1C1",
  codeNumber: "#6897BB",
  codeFunction: "#88C0D0",
  codeOperator: "#81A1C1",
  codeClass: "#8FBCBB",
  codePunctuation: "#ECEFF4",
  codeError: "#E08679"
}

const theme = new Theme({ wrapper, color })
  .add(BoxStyling)
  .add(HeadingStyling)
  .add(ListStyling)
  .add(LayoutStyling)
  .add(TextStyling)
  .add(SplitListItemStyling)
  .add(InputStyling)
  .add(RadioPillItemStyling)
  .add(TableStyling)

export default theme
