import { BaseTheme } from "@staccx/base"
import { Theme } from "@staccx/theme"
import reset from "./reset"
import Button from "./Theme.Button"
import Box from "./Theme.Box"
import HeadingStyling from "./Theme.Headings"
import { TextStyling } from "./Theme.Texts"
import { LogoStyle } from "./Logo"
import {
  RadioPillItemHover,
  RadioPillItemChecked,
  RadioPillLabel,
  RadioPillContainer,
  RadioPillWrapper
} from "./Theme.Radiopill"
import {
  InputStyling,
  LabelStyling,
  LabelInputStyling,
  PostalCodeInputStyling,
  PostalCodeInputLocationStyling
} from "./Theme.Inputs"
import { CarIcon } from "./Icons/CarIcon"
import { GarageIcon } from "./Icons/GarageIcon"
import { ProfileIcon } from "./Icons/ProfileIcon"
import { SliderThumb, SliderTrack } from "./Theme.Slider"
import { LayoutStyling } from "./Theme.Layout"
import { ListStyling } from "./Theme.Lists"
import {
  CheckBoxLabel,
  CheckBoxCheckContainer,
  CheckBoxCheck
} from "./Theme.CheckBox"
import { ToggleElementStyling } from "./Theme.Toggle"
import { HelpIcon } from "./Icons/HelpIcon"
import { ModalContentStyling } from "./Theme.Modal"

const borderRadius = "4px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "540px",
  medium: "640px",
  large: "1040px",
  largePlus: "1280px",
  breakout: "640px",
  chromeMobileS: "320px",
  chromeMobileM: "375px",
  chromeMobileL: "425px",
  chromeTablet: "768px",
  chromeLaptop: "1024px",
  chromeLaptopL: "1440px",
  chrome4K: "2560px"
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
  bg: "#fff",
  bgGray: "#F6F6F6",
  primary: "#4FAF73",
  primaryLight: "#83ECAA",
  primaryDark: "#1C966B",
  secondary: "#124F5E",
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
  darkBlue: "#124F5E",
  blackBlue: "#171C1E"
}

const font = {
  h1: "36px",
  h2: "32px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "14px",
  tiny: "12px",
  small: "16px",
  large: "18px",
  largePlus: "24px",
  largePlusPlus: "28px",
  huge: "36px",
  hugePlus: "52px",
  input: "16px"
}

const webfonts = {
  google: {
    families: ["Open Sans:400,700"]
  },
  typekit: {
    id: "ykt5nel"
  }
}

const fontFamily = {
  heading: "sofia-pro",
  body: "Open Sans"
}

const fontWeight = {
  bold: "700",
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
  .add(RadioPillItemHover)
  .add(RadioPillItemChecked)
  .add(RadioPillLabel)
  .add(RadioPillContainer)
  .add(InputStyling)
  .add(LabelStyling)
  .add(PostalCodeInputStyling)
  .add(PostalCodeInputLocationStyling)
  .add(LabelInputStyling)
  .add(CarIcon)
  .add(GarageIcon)
  .add(ProfileIcon)
  .add(HelpIcon)
  .add(SliderThumb)
  .add(SliderTrack)
  .add(LayoutStyling)
  .add(ListStyling)
  .add(CheckBoxLabel)
  .add(CheckBoxCheckContainer)
  .add(CheckBoxCheck)
  .add(ToggleElementStyling)
  .add(RadioPillWrapper)
  .add(ModalContentStyling)

export default t
