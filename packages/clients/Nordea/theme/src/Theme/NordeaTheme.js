import { Theme } from "@staccx/theme"
import { BaseTheme } from "@staccx/base"
import reset from "./reset"
import { HeadingStyling } from "./theme.Headings"
import { ParagraphStyling } from "./theme.Paragraphs"
import { BoxStyling } from "./theme.Boxes"
import { AlertStyling } from "./theme.Alerts"
import { ListStyling } from "./theme.Lists"
import { TextStyling } from "./theme.Texts"
import { ButtonStyling } from "./theme.Buttons"
import { InputStyling } from "./theme.Inputs"
import { LayoutStyling, LayoutItemStyling } from "./theme.Layouts"
import { LogoStyle } from "./Logo"
import { AddIcon } from "./Icons/Add"
import { NewsIcon } from "./Icons/News"
import { AlertIcon } from "./Icons/Alert"

const borderRadius = "0px"
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
  bg: "#F4F2F1",
  primary: "#0000A0",
  primaryLight: "#DCEDFF",
  secondary: "#FDECE4",
  gray: "#646464",
  text: "#000040",
  white: "#fff",
  red: "#FC6161",
  yellow: "#FFE184",
  line: "#979797",
  wcag: "#777",
  disabled: "#E4E4E4",
  warning: "#FC6161",
  black: "#000",
  subtleHover: "#E5F2FF",
  b5: "#00005E",
  b4: "#0000A0",
  b3: "#0000FF",
  b2: "#3399FF",
  b1: "#99CCFF",
  bg1: "#E5F2FF"
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

const fontFamily = {
  heading: "NordeaSansSmall",
  body: "NordeaSansSmall"
}

const DealerpadSpecificColor = {
  header: color.b5,
  headerText: color.white,
  headerActive: color.b1,
  headerIconActive: color.white
}

const theme = new Theme(BaseTheme, {
  font,
  fontWeight,
  color: { ...color, ...DealerpadSpecificColor },
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
  .addStyles(InputStyling)
  .addStyles(LayoutStyling)
  .addStyles(LayoutItemStyling)
  .add(LogoStyle)
  .add(AddIcon)
  .add(NewsIcon)
  .add(AlertIcon)
export default theme
