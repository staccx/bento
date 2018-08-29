import { Theme } from "@staccx/theme"
import { BaseTheme } from "@staccx/base"
import { InputStyling } from "./Theme.Inputs"
import { ListStyling } from "./Theme.Lists"
import { ItemGroupWrapperStyling, ItemGroupStyling } from "./Theme.ItemGroup"
import { ButtonStyling } from "./Theme.Buttons"

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

const theme = new Theme(BaseTheme, {
  name: "invoicing",
  font,
  webfonts,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  global: ``
})
  .add(InputStyling)
  .add(ListStyling)
  .add(ItemGroupWrapperStyling)
  .add(ItemGroupStyling)
  .add(ButtonStyling)
export default theme
