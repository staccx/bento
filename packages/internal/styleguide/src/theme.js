import { BaseTheme } from "@staccx/base"
import { Theme } from "@staccx/theme"
import reset from "./reset"

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
  bg: "#fcfcfc",
  bgGray: "#F9F7F7",
  primary: "#23A532",
  gray: "#767676",
  text: "#ea5210",
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
  codeBackground: "#2B2B2B",
  codeForeground: "#A9B7C6",
  codeComment: "#619647",
  codeString: "#A5C25C",
  codeKeyword: "#CB772F",
  codeNumber: "#6897BB",
  codeFunction: "#A9B7C6",
  codeOperator: "#A9B7C6",
  codeClass: "#A9B7C6"

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

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans"
}

const theme = new Theme(BaseTheme, {
  name: "Norfjell",
  layout: {
    dashboardLayout: "columnNarrow",
    menuArea: "aside"
  },
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

export default theme
