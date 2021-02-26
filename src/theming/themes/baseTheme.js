import React from "react"
import Theme from "../Theme"
import reset from "../styles/cssResets"
import grids from "../../components/Layout/Layout/Layout.Grids"
import codeTheme from "../codeTheme"

const Logo = () => <div>ThemeComponent for BaseTheme</div>
Logo.displayName = "Logo for base theme"

export const theme = {
  name: "Base Theme",
  storybookName: "Base Theme",
  spacing: {
    huge: "96px",
    large: "48px",
    mediumPlus: "32px",
    medium: "24px",
    small: "12px",
    tiny: "6px",
    micro: "3px"
  },
  wrapper: {
    small: "420px",
    medium: "640px",
    large: "1024px",
    breakout: "640px"
  },
  color: {
    white: "#fff",
    bg: "#fff",
    subtleHover: "#F7F7FF",
    bgGray: "#f7f7ff",
    line: "#EBEBF2",
    gray: "#767676",
    wcag: "#777",
    disabled: "#BABABA",
    primary: "#00a190",
    secondary: "#F5A623",
    text: "#2b2b2b",
    negative: "#ea526f",
    positive: "#4A90E2",
    warning: "#c54059",
    black: "#000",
    green: "#00a190", // for toggle eks
    link: "#279AF1"
  },
  fontFamily: {
    heading: "sans-serif",
    body: "sans-serif"
  },
  font: {
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
    lineHeight: "1.5"
  },
  fontWeight: {
    bold: "bold",
    normal: "normal",
    light: "lighter"
  },
  targetSize: {
    small: "36px",
    normal: "44px"
  },
  borderRadius: "2px",
  reset,
  grid: grids,
  logo: Logo
}

export const StyleguideTheme = new Theme(theme, codeTheme)

export default theme
