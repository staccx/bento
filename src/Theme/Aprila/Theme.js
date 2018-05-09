import { BaseTheme, Theme } from "@staccx/base"
import { lighten, rgba } from "polished"
import reset from "./reset"
import Button from "./Theme.Button"
import { BoxStyling } from "./Theme.Box"
import Logo from "./Theme.Logo"
import ModalStyle, { ModalBackdropStyle } from "./Theme.Modal"
import AlertStyle from "./Theme.Alert"
import NewBadgeStyle from "./Theme.NewBadge"
import Menu from "./../../components/Menu/MenuRow"
import IconArrowDown from "./Icons/Icon.ArrowDown"
import IconArrowUp from "./Icons/Icon.ArrowUp"
import IconLogout from "./Icons/Icon.Logout"
import IconProfile from "./Icons/Icon.Profile"
import IconInbox from "./Icons/Icon.Inbox"
import Footer from "./Footer/Footer"
import Ad from "./Ad"
import ExpandListBtn from "../Shared/Transaction.ExpandButton"
import ExpandListExpanded from "../Shared/ExpandListItem.Expanded"

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
  accountHeading: color.bgGray,
  accountEarned: color.bgGray,
  accountBalance: color.secondary,
  expandedItem: lighten(0.05, color.line),
  accountInfoBorder: rgba(color.primary, 0.25)
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
    font.h1 +
    " + (84 - " +
    font.h1.substring(0, font.h1.indexOf("px")) +
    " ) * ((100vw - 300px) / (2560 - 300)))",
  accountBalanceDecimals: font.h2,
  transactionHeading: font.h4
}

const fontFamily = {
  heading: "Roboto",
  body: "Roboto"
}

const t = new Theme(BaseTheme, {
  name: "Aprila",
  layout: {
    dashboardLayout: "stonehenge",
    menuArea: "main"
  },
  logo: Logo,
  iconArrowDown: IconArrowDown,
  iconArrowUp: IconArrowUp,
  iconProfile: IconProfile,
  iconLogout: IconLogout,
  iconInbox: IconInbox,
  footer: Footer,
  menu: Menu,
  ad: Ad,
  font: { ...font, ...BiBSpecificFont },
  color: { ...color, ...BiBSpecificColor },
  fontWeight,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  spacing,
  global: reset,
  COMPONENT_EXPAND_LIST_ITEM_BTN: ExpandListBtn
})
  .addStyles(Button)
  .addStyles(BoxStyling)
  .addStyles(ModalStyle)
  .addStyles(AlertStyle)
  .addStyles(ModalBackdropStyle)
  .addStyles(ExpandListExpanded)
  .addStyles(NewBadgeStyle)

export default t.get
