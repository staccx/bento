import { BaseTheme, Theme } from "@staccx/base"
import reset from "./reset"
import ExpandButton from "./Theme.ExpandButton"
import MenuButton from "./Theme.MenuButton"
import { ModalStyles, ModalLeftButton } from "./Theme.Modal"
import DashboardBox from "./Theme.Box"
import Logo from "./Theme.Logo"
import Menu from "./../../components/Menu/MenuList"

const borderRadius = "0px"
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
  bg: "#F8F8F8",
  bgGray: "#F9F7F7",
  primary: "#3297BF",
  secondary: "#55C4B4",
  gray: "#767676",
  text: "#2b2b2b",
  white: "#fff",
  line: "#EBEBF2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#FB8D90",
  positive: "#3297BF",
  negative: "#FB8D90",
  black: "#000",
  subtleHover: "#F7F7FF"
}

const BiBSpecificColor = {
  accountHeading: color.disabled,
  accountEarned: color.secondary
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

const BiBSpecificFont = {
  accountBalance: font.h1,
  accountBalanceDecimals: font.tiny,
  transactionHeading: font.h6
}

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans"
}

const t = new Theme(BaseTheme, {
  name: "Norfjell",
  layout: {
    dashboardLayout: "columnNarrow",
    menuArea: "aside"
  },
  logo: Logo,
  menu: Menu,
  font: { ...font, ...BiBSpecificFont },
  color: { ...color, ...BiBSpecificColor },
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  spacing,
  global: reset
})
  .addStyles(MenuButton)
  .addStyles(ExpandButton)
  .addStyles(DashboardBox)
  .addStyles(ModalStyles)
  .addStyles(ModalLeftButton)

export default t.get
