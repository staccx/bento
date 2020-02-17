import { css } from "styled-components"
import Theme from "../Theme"
import reset from "../styles/cssResets"
import grids from "../../components/Layout/Layout/Layout.Grids"
import codeTheme from "../codeTheme"

export const theme = {
  name: "Stacc Theme",
  storybookName: "Test Theme",
  spacing: {
    grid: "20px",
    gridLarge: "40px",
    huge: "96px",
    largePlus: "72px",
    large: "48px",
    mediumPlus: "32px",
    medium: "24px",
    small: "12px",
    tiny: "6px"
  },
  wrapper: {
    small: "420px",
    medium: "640px",
    large: "1280px",
    breakout: "640px"
  },
  color: {
    bg: "#F8F8F8",
    bgGray: "#F8F8F8",
    primary: "#D44235",
    primaryWcag: "#D44235",
    primaryDark: "#872A22",
    primaryMediumDark: "#B72E21",
    secondary: "#467EFF",
    gray: "#B8B8B8",
    text: "#777772",
    textDark: "#2b2b2b",
    hero: "#2b2b2b",
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
    pink: "#FCEEED",
    placeholder: "#b8b8b8",
    inputLine: "#6c6c6c",
    link: "#467EFF",
    espen: "313131"
  },
  fontFamily: {
    heading: "sans-serif",
    body: "sans-serif"
  },
  font: {
    h1: "64px",
    h2: "36px",
    h3: "22px",
    h4: "18px",
    h5: "16px",
    h6: "14px",
    base: "16px",
    small: "14px",
    tiny: "12px",
    input: "16px",
    giga: "64px",
    huge: "48px",
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
  ALERT: {
    rounded: css`
      border-radius: 30px;
    `,
    inverted: css`
      filter: invert(100%);
    `,
    blurred: css`
      filter: blur(5px);
    `
  }
}

export const StyleguideTheme = new Theme(theme, codeTheme)

export default theme
