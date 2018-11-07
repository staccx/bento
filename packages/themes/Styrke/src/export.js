import { theming } from "@staccx/base"
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
  small: "700px",
  medium: "460px",
  large: "720px",
  huge: "1284px",
  breakout: "640px",
  form: "360px"
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
  secondary: "#3c61e7",
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
  medium: "500",
  normal: "400"
}

const webfonts = {
  google: {
    families: ["IBM Plex Sans:400,500,700"]
  }
}

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans"
}

export default new theming.Theme({
  webfonts,
  font,
  fontWeight,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily
})
  .add(theming.createGlobal({ cssResets: theming.cssResets }))
  .add(HeadingStyling)
  .add(ParagraphStyling)
  .add(BoxStyling)
  .add(AlertStyling)
  .add(ListStyling)
  .add(TextStyling)
  .add(ButtonStyling)
  .add(SplitListItemStyling)
  .add(InputStyling)
  .add(LabelStyling)
  .add(ExpandListItemStyling)
  .add(SelectSelectedStyling)
  .add(SelectIconButtonStyling)
  .add(SelectOptionsWrapperStyling)
  .add(LayoutStyling)
  .add(LayoutItemStyling)
  .add(RadioPillStyling)
  .add(ExpandStyling)
  .add(DividerStyling)
