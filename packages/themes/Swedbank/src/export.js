import { theming } from "@staccx/base"
import Toggle from "./theme/Toggle.Variants"
import Layout from "./theme/Layout.Variants"
import Button from "./theme/Button.Variants"

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
  bg: "#fbf2ea",
  bgGray: "#ebe7e2",
  primary: "#ee7023",
  secondary: "#31a3ae",
  gray: "#767676",
  text: "#512b2b",
  white: "#fff",
  red: "#ea526f",
  pink: "#f8d0db",
  green: "#00a190",
  blue: "#5b8ad6",
  yellow: "#f4da87",
  line: "#EBEBF2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#c54059",
  black: "#000",
  subtleHover: "#F7F7FF"
}

const graphColor = {
  pie: [
    "#2F80ED",
    "#9B51E0",
    "#BB6BD9",
    "#5D3B9F",
    "#56CCF2",
    "#EB5757",
    "#F2994A",
    "#F2C94C",
    "#219653",
    "#6FCF97",
    "#6FB2CF",
    "#CF756F",
    "#FFBDB1"
  ]
}

const gradient = {
  laser: ["#5D3B9F", "#CF27AA"],
  galaxy: ["#fa7f25", "#fdbe13", color.bg]
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
    families: ["Libre Baskerville:700", "Libre Franklin:400,600"]
  }
}

const fontFamily = {
  heading: "Libre Baskerville",
  body: "Libre Franklin"
}

const fontWeight = {
  bold: 700,
  normal: 400,
  light: 400
}

export default new theming.Theme({
  name: "Swedbank",
  font,
  fontWeight,
  webfonts,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  gradient,
  graphColor
})
  .add(Toggle)
  .add(Layout)
  .add(Button)
