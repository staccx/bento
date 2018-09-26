import { BaseTheme } from "@staccx/base"
import { Theme } from "@staccx/theme"
import reset from "./reset"
import Button from "./Theme.Button"
import Box from "./Theme.Box"
import { LogoStyle } from "./Theme.Logo"
import { CheckboxCheckedIcon, CheckboxCheckedLabel } from "./Theme.Checkbox"
import { HeadingStyling } from "./theme.Headings"
import WrapperStyling from "./Theme.Wrapper"

const borderRadius = "4px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "420px",
  medium: "640px",
  large: "1040px",
  breakout: "640px"
}

const spacing = {
  grid: "7vh",
  gridLarge: "9vh",
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
  bgGray: "#F8F8F8",
  primary: "#EB5E55",
  primaryWcag: "#C54F47",
  primaryDark: "#99352A",
  primaryMediumDark: "#B72E21",
  secondary: "#467EFF",
  gray: "#B8B8B8",
  text: "#6C6C6C",
  textDark: "#2b2b2b",
  white: "#fff",
  line: "#EBE7E7",
  wcag: "#777",
  disabled: "#B8B8B8",
  warning: "#EB5E55",
  positive: "#467EFF",
  negative: "#EB5E55",
  black: "#000",
  subtleHover: "#F8F8F8",
  blue: "#467EFF",
  red: "#EB5E55",
  orange: "#FFBA30",
  yellow: "#FFF230",
  green: "#66CD73",
  g1: "#6C6C6C",
  g2: "#B8B8B8",
  g3: "#E4E2E2",
  g4: "#F8F8F8",
  g5: "#fff",
  blush: "#FFF1E5",
  pink: "#FCEEED"
}

const font = {
  h1: "64px",
  h2: "36px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "16px",
  tiny: "12px",
  input: "16px",
  giga: "64px",
  huge: "48px"
}

const webfonts = {
  google: {
    families: [
      "IBM Plex Sans:300,400,500, 700",
      "IBM Plex Mono:400",
      "Montserrat:400,500,600,700"
    ]
  }
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

const fontFamily = {
  heading: "Montserrat",
  body: "IBM Plex Sans",
  mono: "IBM Plex Mono"
}

const t = new Theme(BaseTheme, {
  name: "Stacc",
  font: { ...font },
  fontWeight,
  webfonts,
  color: { ...color },
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  spacing,
  global: reset
})
  .add(Button)
  .add(Box)
  .add(LogoStyle)
  .add(LogoStyle)
  .add(CheckboxCheckedIcon)
  .add(CheckboxCheckedLabel)
  .add(HeadingStyling)
  .add(WrapperStyling)

export default t
