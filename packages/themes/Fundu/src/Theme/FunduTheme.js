import { theming } from "@staccx/base"
import { HeadingStyling } from "./theme.Headings"
import { ParagraphStyling } from "./theme.Paragraphs"
import { BoxStyling } from "./theme.Boxes"
import { AlertStyling } from "./theme.Alerts"
import { DividerStyling } from "./theme.Dividers"
import {
  ListStyling,
  SplitListItemStyling,
  ExpandListItemStyling
} from "./theme.Lists"
import { TextStyling } from "./theme.Texts"
import { ImageStyling } from "./theme.Images"
import { ButtonStyling } from "./theme.Buttons"
import {
  InputStyling,
  LabelStyling,
  SelectIconButtonStyling,
  SelectOptionsWrapperStyling,
  RadioPillItemStyling,
  SelectSimpleSelectStyling,
  SelectSimpleWrapperStyling,
  SliderKeyboardWrapperStyling,
  SliderInputStyling,
  CompanyInputLoadFromStyling,
  CompanyInputLoadToStyling,
  CompanyInputCloseStyling,
  CompanyInputFlagStyling,
  CompanyInputSelectItemStyling,
  SelectOptionStyling,
  SelectSelectedWrapperStyling,
  PostalCodeInputStyling
} from "./theme.Inputs"
import { LayoutStyling } from "./theme.Layouts"
import { LayoutItemStyling } from "./theme.LayoutItem"
import { LogoStyle } from "./Logo"

const borderRadius = "2px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  form: "360px",
  small: "700px",
  medium: "1080px",
  large: "1350px",
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
  tiny: "6px",
  micro: "3px"
}

const color = {
  bg: "#F5F8FC",
  bgGray: "#EAEEF4",
  primary: "#1F5D9B",
  secondary: "#32A873",
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
  link: "#1F5D9B"
}

const font = {
  h1: "36px",
  h2: "26px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "16px",
  tiny: "12px",
  input: "16px",
  huge: "50px",
  lineHeight: "1.4"
}

const fontFamily = {
  heading: "Avenir",
  body: "Avenir"
}

const fontWeight = {
  normal: "400",
  bold: "600"
}

export default new theming.Theme({
  name: "Fundu",
  font,
  fontWeight,
  color,
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily
})
  .add(theming.createGlobal({ cssResets: theming.cssResets }))
  .add(HeadingStyling)
  .add(ParagraphStyling)
  .add(BoxStyling)
  .add(AlertStyling)
  .add(ListStyling)
  .add(TextStyling)
  .add(ButtonStyling)
  .add(SplitListItemStyling)
  .add(InputStyling)
  .add(LabelStyling)
  .add(ExpandListItemStyling)
  .add(SelectIconButtonStyling)
  .add(SelectOptionsWrapperStyling)
  .add(LayoutStyling)
  .add(LayoutItemStyling)
  .add(RadioPillItemStyling)
  .add(SelectSimpleSelectStyling)
  .add(SelectSimpleWrapperStyling)
  .add(SliderKeyboardWrapperStyling)
  .add(SliderInputStyling)
  .add(CompanyInputLoadFromStyling)
  .add(CompanyInputLoadToStyling)
  .add(CompanyInputCloseStyling)
  .add(CompanyInputFlagStyling)
  .add(CompanyInputSelectItemStyling)
  .add(SelectOptionStyling)
  .add(DividerStyling)
  .add(LogoStyle)
  .add(SelectSelectedWrapperStyling)
  .add(PostalCodeInputStyling)
  .add(ImageStyling)
