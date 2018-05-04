import { BaseTheme, Theme } from "@staccx/base"
import reset from "./reset"
import ExpandButton from "./Theme.ExpandButton"
import MenuButton from "./Theme.MenuButton"
import { BoxStyling } from "./Theme.Box"
import ModalStyles from "./Theme.Modal"
import Logo from "./Theme.Logo"
import Menu from "./../../components/Menu/MenuRow"

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
  primary: "#FF7E68",
  secondary: "#3B2C7C",
  gray: "#767676",
  text: "#3b2c7c",
  white: "#fff",
  line: "#EBEBF2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#FB8D90",
  positive: "#FF7E68",
  negative: "#3B2C7C",
  black: "#000",
  subtleHover: "#E9E8F2",
  accountHeading: "#F2F1FC",
  accountEarned: "#F2F1FC"
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
  huge: "44px",
  accountBalance: "calc(36px + (84 - 36) * ((100vw - 300px) / (1600 - 300)))"
}

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans"
}

const t = new Theme(BaseTheme, {
  name: "Aprila",
  layout: {
    dashboardLayout: "stonehenge",
    menuArea: "main"
  },
  logo: Logo,
  menu: Menu,
  font,
  color,
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
  .addStyles(BoxStyling)
  .addStyles(ModalStyles)

export default t.get
