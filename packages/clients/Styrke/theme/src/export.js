import { Theme } from "@staccx/theme"
import { BaseTheme } from "@staccx/base"
import reset from "./Theme/reset"
import { HeadingStyling } from "./Theme/theme.Headings"
import { ParagraphStyling } from "./Theme/theme.Paragraphs"
import { BoxStyling } from "./Theme/theme.Boxes"
import { AlertStyling } from "./Theme/theme.Alerts"
import { DividerStyling } from "./Theme/theme.Dividers"
import {
  ListStyling,
  SplitListItemStyling,
  ExpandListItemStyling
} from "./Theme/theme.Lists"
import { TextStyling } from "./Theme/theme.Texts"
import { ButtonStyling } from "./Theme/theme.Buttons"
import {
  InputStyling,
  LabelStyling,
  SelectSelectedStyling,
  SelectIconButtonStyling,
  SelectOptionsWrapperStyling,
  RadioPillStyling
} from "./Theme/theme.Inputs"
import { LayoutStyling, LayoutItemStyling } from "./Theme/theme.Layouts"
import { ExpandStyling } from "./Theme/theme.Expand"

const borderRadius = "5px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "460px",
  medium: "460px",
  large: "720px",
  huge: "1284px",
  breakout: "640px"
}

const spacing = {
  grid: "7vh",
  huge: "96px",
  largePlus: "72px",
  large: "48px",
  mediumPlus: "32px",
  medium: "24px",
  small: "12px",
  tiny: "6px"
}
const color = {
  bg: "#fcfcfc",
  bgGray: "#f6f1e5",
  bgBlue: "#DCEDF0",
  bgBlueDark: "#CEDEE0",
  primary: "#3c61e7",
  primaryDark: "#1a40c5",
  gray: "#646464",
  text: "#333",
  white: "#fff",
  red: "#E06666",
  yellow: "#FFF8BB",
  line: "#d8d8d8",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#E06666",
  black: "#000",
  subtleHover: "#fff"
}

const font = {
  h1: "36px",
  h2: "26px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "14px",
  tiny: "12px",
  input: "16px",
  huge: "44px"
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

const webfonts = {
  google: {
    families: ["Montserrat:700", "Open Sans:400,600"]
  }
}

const fontFamily = {
  heading: "Montserrat",
  body: "Open Sans"
}

const theme = new Theme(BaseTheme, {
  webfonts,
  font,
  fontWeight,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  global: reset
})
  .addStyles(HeadingStyling)
  .addStyles(ParagraphStyling)
  .addStyles(BoxStyling)
  .addStyles(AlertStyling)
  .addStyles(ListStyling)
  .addStyles(TextStyling)
  .addStyles(ButtonStyling)
  .addStyles(SplitListItemStyling)
  .addStyles(InputStyling)
  .addStyles(LabelStyling)
  .addStyles(ExpandListItemStyling)
  .addStyles(SelectSelectedStyling)
  .addStyles(SelectIconButtonStyling)
  .addStyles(SelectOptionsWrapperStyling)
  .addStyles(LayoutStyling)
  .addStyles(LayoutItemStyling)
  .addStyles(RadioPillStyling)
  .addStyles(ExpandStyling)
  .addStyles(DividerStyling)

export default theme.get
