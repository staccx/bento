import { BaseTheme } from "@staccx/base"
import { Theme } from "@staccx/theme"
import reset from "./reset"
import Button from "./Theme.Button"
import Box from "./Theme.Box"

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
  gridLarge: "7vh",
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
  bgGray: "#F9F7F7",
  primary: "#4FAF73",
  secondary: "#38454B",
  toneDown: "#8C8C8C",
  gray: "#767676",
  text: "#2b2b2b",
  white: "#fff",
  red: "#ea526f",
  pink: "#f8d0db",
  green: "#00a190",
  blue: "#188EFB",
  yellow: "#f4da87",
  line: "#EBEBF2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#c54059",
  black: "#000",
  subtleHover: "#F7F7FF"
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
    families: ["Mukta:800", "Open Sans:400"]
  }
}

const fontFamily = {
  heading: "Mukta",
  body: "Open Sans"
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

const t = new Theme(BaseTheme, {
  name: "imove",
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

export default t
