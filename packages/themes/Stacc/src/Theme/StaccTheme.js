import { theming } from "@staccx/base"
import reset from "./reset"
import Button from "./Theme.Button"
import Box from "./Theme.Box"
import { LogoStyle } from "./Theme.Logo"
import { CheckboxCheckedIcon, CheckboxCheckedLabel } from "./Theme.Checkbox"
import { HeadingStyling } from "./theme.Headings"
import WrapperStyling from "./Theme.Wrapper"
import InputVariants from "./Input.variants"
import LayoutVariants from "./Layout.Variants"
import LabelVariants from "./Label.Variants"

const borderRadius = "4px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "420px",
  medium: "640px",
  large: "1280px",
  breakout: "640px"
}

const spacing = {
  grid: "20px",
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
}

const font = {
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

const boxShadow = `0px 3px 10px rgba(0,0,0,0.2)`

const theme = new theming.Theme(
  {},
  {
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
    boxShadow
  }
)
  .add(Button)
  .add(Box)
  .add(LogoStyle)
  .add(LogoStyle)
  .add(CheckboxCheckedIcon)
  .add(CheckboxCheckedLabel)
  .add(HeadingStyling)
  .add(WrapperStyling)
  .add(InputVariants)
  .add(LayoutVariants)
  .add(LabelVariants)
  .add(theming.createGlobal({ base: theming.cssResets }))
  .add(reset)

export default theme
