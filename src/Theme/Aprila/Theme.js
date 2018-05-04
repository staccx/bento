import { BaseTheme, Theme } from "@staccx/base"
import reset from "./reset"
import Button from "./Theme.Button"
import { BoxStyling } from "./Theme.Box"
import Logo from "./Theme.Logo"
import ModalStyle from "./Theme.Modal"
import AlertStyle from "./Theme.Alert"
import Menu from "./../../components/Menu/MenuRow"
import IconArrowDown from "./Icons/Icon.ArrowDown"
import IconArrowUp from "./Icons/Icon.ArrowUp"
import IconLogout from "./Icons/Icon.Logout"
import IconProfile from "./Icons/Icon.Profile"
import Footer from "./Footer/Footer"
import Ad from "./Ad"

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
  gray: "#767676",
  text: "#3b2c7c",
  white: "#fff",
  line: "#D3D3F4",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#FB8D90",
  positive: "#FF7E68",
  negative: "#3B2C7C",
  black: "#000",
  subtleHover: "#F2F1FC"
}

const BiBSpecificColor = {
  accountHeading: color.bgGray,
  accountEarned: color.bgGray,
  accountBalance: color.secondary
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
  heading: "Fira Sans",
  body: "Fira Sans"
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
  footer: Footer,
  menu: Menu,
  ad: Ad,
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
  .addStyles(Button)
  .addStyles(BoxStyling)
  .addStyles(ModalStyle)
  .addStyles(AlertStyle)

export default t.get
