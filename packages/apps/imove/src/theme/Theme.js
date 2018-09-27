import { css } from "styled-components"
import { Theme } from "@staccx/theme"
import { BaseTheme } from "@staccx/base"
import HeadingStyling from "./Theme.Headings"

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
  largePlus: "1280px",
  breakout: "640px"
}

const spacing = {
  grid: "7vh",
  huge: "130px",
  mediumPlus: "32px",
  medium: "24px",
  small: "12px",
  tiny: "6px",
  largePlusPlus: "96px",
  largePlus: "72px",
  large: "48px",
  smallWhitespace: "48px",
  mediumWhitespace: "96px",
  largeWhitespace: "192px"
}
const color = {
  bg: "#fcfcfc",
  bgGray: "#f6f6f6",
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
  }
}

const fontFamily = {
  heading: "Mukta",
  body: "Open Sans"
}

const theme = new Theme(BaseTheme, {
  name: "imove",
  font,
  webfonts,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  global: css`
    h2 {
      line-height: 1.2;
    }
  `
}).add(HeadingStyling)
export default theme
