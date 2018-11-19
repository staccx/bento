import { theming } from "@staccx/base"
import { BoxStyling } from "./theme.docs.Boxes"
import { HeadingStyling } from "./theme.docs.Headings"
import { ListStyling, SplitListItemStyling } from "./theme.docs.Lists"
import { LayoutStyling } from "./theme.docs.Layouts"
import { TextStyling } from "./theme.docs.Texts"
import {
  InputStyling,
  RadioPillItemStyling,
  RadioPillItemHoverStyling
} from "./theme.docs.Inputs"
import { TableStyling } from "./theme.docs.Tables"
import { ButtonDevStyling } from "./theme.Buttons"
import { CopyToClipboardComponentStyling } from "./theme.docs.CopyToClipboard"
import { IconDelete } from "../Icons/Icon.Delete"
import { ModalStyling } from "./theme.docs.Modal"

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
  codeError: "#E08679",
  codeHTMLTag: "#8FBCBB",
  codeHTMLAttrValue: "#A3BE8C",
  codeHTMLAttrName: "#81A1C1",
  devportalLine: "#D7DBE0"
}

const theme = new theming.Theme({ wrapper, color })
  .add(BoxStyling)
  .add(HeadingStyling)
  .add(ListStyling)
  .add(LayoutStyling)
  .add(TextStyling)
  .add(SplitListItemStyling)
  .add(InputStyling)
  .add(RadioPillItemStyling)
  .add(TableStyling)
  .add(RadioPillItemHoverStyling)
  .add(ButtonDevStyling)
  .add(CopyToClipboardComponentStyling)
  .add(IconDelete)
  .add(ModalStyling)

export default theme
