import { BaseTheme } from "@staccx/base"
import { Theme } from "@staccx/theme"
import reset from "./reset"
import Button from "./Theme.Button"
import Box from "./Theme.Box"
import HeadingStyling from "./Theme.Headings"
import { TextStyling } from "./Theme.Texts"
import { LogoStyle } from "./Logo"

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
  tiny: "6px",
  smallWhitespace: "48px",
  mediumWhitespace: "96px",
  largeWhitespace: "192px"
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
  subtleHover: "#F7F7FF",
  darkBlue: "#124F5E"
}

const font = {
  h1: "36px",
  h2: "54px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "14px",
  tiny: "12px",
  large: "18px",
  largePlus: "24px",
  huge: "36px",
  input: "16px"
}

const webfonts = {
  google: {
    families: ["Mukta:800", "Open Sans:400"]
  },
  typekit: {
    id: "ykt5nel"
  }
}

const fontFamily = {
  heading: "Sofia Pro",
  body: "Open Sans"
}

const fontWeight = {
  bold: "800",
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
  .add(HeadingStyling)
  .add(TextStyling)
  .add(LogoStyle)

export default t
