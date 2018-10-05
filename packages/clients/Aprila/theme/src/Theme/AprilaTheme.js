import { BaseTheme, theming } from "@staccx/base"
import { lighten, rgba } from "polished"
import reset from "./reset"
import Button from "./Theme.Button"
import { BoxStyling } from "./Theme.Box"
import { LogoStyle } from "./Theme.Logo"
import ModalStyle, { ModalBackdropStyle } from "./Theme.Modal"
import AlertStyle from "./Theme.Alert"
import NewBadgeStyle from "./Theme.NewBadge"
import { IconArrowDownStyle } from "./Icons/Icon.ArrowDown"
import { IconArrowUpStyle } from "./Icons/Icon.ArrowUp"
import { IconLogoutStyle } from "./Icons/Icon.Logout"
import { IconProfileStyle } from "./Icons/Icon.Profile"
import { IconInboxStyle } from "./Icons/Icon.Inbox"
import { FooterStyle } from "./Footer/Footer"
import { AdStyle } from "./Ad"
import { ExpandListButtonStyle } from "../components/Transaction.ExpandButton"
import ExpandListExpanded from "../components/ExpandListItem.Expanded"
import { MenuStyle } from "../components/MenuRow"
const { Theme } = theming

const borderRadius = "8px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "420px",
  medium: "640px",
  large: "1024px",
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
  bg: "#fff",
  bgGray: "#F2F1FC",
  primary: "#3B2C7C",
  secondary: "#FF7E68",
  secondaryLight: "#FECDC6",
  gray: "#767676",
  text: "#3b2c7c",
  white: "#fff",
  line: "#D3D3F4",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#FF7E68",
  positive: "#3B2C7C",
  negative: "#FF7E68",
  black: "#000",
  subtleHover: "#F2F1FC"
}

const BiBSpecificColor = {
  accountHeading: theming.color.bgGray,
  accountEarned: theming.color.bgGray,
  accountBalance: theming.color.secondary,
  expandedItem: lighten(0.05, theming.color.line),
  accountInfoBorder: rgba(theming.color.primary, 0.25)
}

const font = {
  h1: "36px",
  h2: "28px",
  h3: "20px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "14px",
  tiny: "12px",
  input: "16px",
  huge: "44px"
}

const fontWeight = {
  bold: 500,
  normal: 400,
  light: 400
}

const BiBSpecificFont = {
  accountBalance:
    "calc(" +
    theming.font.h1 +
    " + (84 - " +
    theming.font.h1.substring(0, theming.font.h1.indexOf("px")) +
    " ) * ((100vw - 300px) / (2560 - 300)))",
  accountBalanceDecimals: theming.font.h2,
  transactionHeading: theming.font.h4
}

const fontFamily = {
  heading: "Roboto",
  body: "Roboto"
}

const webfonts = {
  google: {
    families: ["Roboto:400,700"]
  }
}

const t = new Theme(BaseTheme, {
  name: "Aprila",
  layout: {
    dashboardLayout: "stonehenge",
    menuArea: "main"
  },
  webfonts,
  font: { ...font, ...BiBSpecificFont },
  color: { ...color, ...BiBSpecificColor },
  fontWeight,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  spacing,
  global: reset
})
  .add(Button)
  .add(BoxStyling)
  .add(ModalStyle)
  .add(AlertStyle)
  .add(ModalBackdropStyle)
  .add(ExpandListExpanded)
  .add(NewBadgeStyle)
  .add(ExpandListButtonStyle)
  .add(FooterStyle)
  .add(MenuStyle)
  .add(AdStyle)
  .add(LogoStyle)
  .add(IconInboxStyle)
  .add(IconLogoutStyle)
  .add(IconProfileStyle)
  .add(IconArrowDownStyle)
  .add(IconArrowUpStyle)

export default t
