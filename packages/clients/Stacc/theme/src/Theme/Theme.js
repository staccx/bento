import { BaseTheme } from "@staccx/base"
import { Theme } from "@staccx/theme"
import reset from "./reset"
import Button from "./Theme.Button"
import Box from "./Theme.Box"
import { LogoStyle } from "./Theme.Logo"
import { CheckboxCheckedIcon, CheckboxCheckedLabel } from "./Theme.Checkbox"

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
  bg: "#fff",
  bgGray: "#F8F8F8",
  primary: "#467EFF",
  secondary: "#EB5E55",
  gray: "#B8B8B8",
  text: "#2b2b2b",
  white: "#fff",
  line: "#F8F8F8",
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
  g5: "#fff"
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

const webfonts = {
  google: {
    families: ["IBM Plex Sans:400,700", "IBM Plex Mono:400"]
  }
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans",
  mono: "IBM"
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

export default t
