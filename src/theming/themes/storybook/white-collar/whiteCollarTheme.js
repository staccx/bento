import Theme from "../../../Theme"
import reset from "./reset"
import btnVariants from "./variants/button.variants"
import anchorVariants from "./variants/anchor.variants"
import {
  expandBtnVariants,
  expandItemVariants,
  expandIconVariants
} from "./variants/expand.variants"
import alertVariants from "./variants/alert.variants"
import progressBarVariants from "./variants/progressbar.variants"

const borderRadius = "0"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "36px"
}

const wrapper = {
  small: "420px",
  medium: "980px",
  large: "1280px",
  breakout: "640px"
}

const spacing = {
  huge: "96px",
  largePlus: "72px",
  large: "48px",
  mediumPlus: "36px",
  medium: "24px",
  small: "12px",
  tiny: "8px"
}

const color = {
  bg: "#fff",
  bgGray: "#E0E5E8",
  bgGrayDark: "#BFCCD4",
  bgDark: "#0E2B3D",
  primary: "#0E2B3D",
  secondary: "#32735F",
  gray: "#B8B8B8",
  text: "#0E2B3D",
  white: "#fff",
  line: "#84BD3A",
  wcag: "#777",
  disabled: "#B8B8B8",
  warning: "#CF1D1A",
  positive: "#84BD3A",
  negative: "#CF1D1A",
  black: "#000",
  subtleHover: "#DEE6E8",
  placeholder: "#BFCCD4",
  inputLine: "#84BD3A",
  link: "#32735F"
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
    families: ["Abril Fatface:400", "Fira Sans:400,500,600,700"]
  }
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

const fontFamily = {
  heading: "Abril Fatface",
  body: "Fira Sans"
}

const theme = new Theme(
  {},
  {
    name: "White collar",
    storybookName: "White collar",
    font: { ...font },
    fontWeight,
    webfonts,
    color: { ...color },
    wrapper,
    targetSize,
    borderRadius,
    headerHeight,
    fontFamily,
    spacing
  }
)
  .add(reset)
  .add([
    btnVariants,
    anchorVariants,
    alertVariants,
    expandBtnVariants,
    expandItemVariants,
    expandIconVariants,
    progressBarVariants
  ])

export default theme
