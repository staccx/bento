import Theme from "../../../Theme"
import reset from "./reset"
import btnVariants from "./variants/button.variants"
import anchorVariants from "./variants/anchor.variants"
import alertVariants from "./variants/alert.variants"

const borderRadius = "4px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "420px",
  medium: "980px",
  large: "1280px",
  breakout: "640px"
}

const spacing = {
  grid: "96px",
  gridLarge: "40px",
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
  bgGray: "#f8f6f5",
  bgDark: "#282626",
  primary: "#4A34DD",
  primaryLight: "#E7E4FB",
  secondary: "#68CA87",
  gray: "#B8B8B8",
  text: "#2D2D2D",
  white: "#fff",
  line: "#F3F2FA",
  wcag: "#777",
  disabled: "#B8B8B8",
  warning: "#CF1D1A",
  positive: "#68CA87",
  negative: "#CF1D1A",
  black: "#000",
  subtleHover: "#F3F2FA",
  placeholder: "#b8b8b8",
  inputLine: "#4A34DD",
  link: "#4A34DD"
}

const font = {
  h1: "50px",
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
}

const webfonts = {
  google: {
    families: ["Libre Franklin:400,700"]
  }
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

const fontFamily = {
  heading: "Libre Franklin",
  body: "Libre Franklin"
}

const boxShadow = `0px 3px 10px rgba(0,0,0,0.2)`

const theme = new Theme(
  {},
  {
    name: "Violet Tendencies",
    storybookName: "Violet Tendencies",
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
    boxShadow
  }
)
  .add(reset)
  .add([btnVariants, anchorVariants, alertVariants])

export default theme
