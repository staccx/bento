import { Theme } from "@staccx/theme"
import { BaseTheme } from "@staccx/base"
import reset from "./reset"
import { HeadingStyling } from "./theme.Headings"
import { ParagraphStyling } from "./theme.Paragraphs"
import { BoxStyling } from "./theme.Boxes"
import { AlertStyling } from "./theme.Alerts"
import { ListStyling } from "./theme.Lists"
import { TextStyling } from "./theme.Texts"
import { ButtonStyling } from "./theme.Buttons"
import { InputStyling, InputWrapperStyling } from "./theme.Inputs"
import { LayoutStyling, LayoutItemStyling } from "./theme.Layouts"
import { NewBadgeBadgeStyling } from "./theme.NewBadges"
import { LogoStyle } from "./Logo"
import { AddIcon } from "./Icons/Add"
import { NewsIcon } from "./Icons/News"
import { AlertIcon } from "./Icons/Alert"
import { LoanIcon } from "./Icons/Loan"
import { LeasingIcon } from "./Icons/Leasing"
import { LeasingPlusIcon } from "./Icons/LeasingPlus"
import { PrivateRentIcon } from "./Icons/PrivateRent"
import { PrivateRentPlusIcon } from "./Icons/PrivateRentPlus"
import { RentIcon } from "./Icons/Rent"
import { AccountIcon } from "./Icons/Account"
import { CardIcon } from "./Icons/Card"
import { CheckmarkIcon } from "./Icons/Checkmark"
import { DotIcon } from "./Icons/Dot"
import { PhoneIcon } from "./Icons/Phone"
import { MailIcon } from "./Icons/Mail"
import { ArrowRightIcon } from "./Icons/ArrowRight"
import { TagStyling } from "./theme.Tag"
import { PortalIcon, PortalLabel } from "./theme.Portal"

const borderRadius = "0px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "460px",
  medium: "840px",
  large: "888px",
  huge: "1440px",
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
  bg: "#F4F2F1",
  primary: "#0000A0",
  primaryLight: "#DCEDFF",
  secondary: "#FDECE4",
  gray: "#646464",
  text: "#000040",
  white: "#fff",
  red: "#FC6161",
  yellow: "#FFE184",
  line: "#C9C7C7",
  wcag: "#777",
  disabled: "#E4E4E4",
  warning: "#FC6161",
  black: "#000",
  subtleHover: "#E5F2FF",
  b5: "#00005E",
  b4: "#0000A0",
  b3: "#0000FF",
  b2: "#3399FF",
  b1: "#99CCFF",
  bg1: "#E5F2FF",
  bg2: "#F5F5F5",
  p3: "#F0C1AE",
  p2: "#FBD9CA",
  p1: "#FDECE4",
  a1: "#FC6161",
  a2: "#FFE184",
  a3: "#40BFA0",
  g4: "#474748",
  g3: "#8B8A8D",
  g2: "#C9C7C7",
  g1: "#E6E4E3",
  concrete: "#F4F2F1"
}

const DealerpadSpecificColor = {
  header: color.b5,
  headerText: color.white,
  headerActive: color.b1,
  headerIconActive: color.white,
  contactIcon: color.p2,
  contactIconHover: color.p3
}

const font = {
  h1: "32px",
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

const fontWeight = {
  bold: "700",
  normal: "400"
}

const fontFamily = {
  heading: "NordeaSansSmall",
  body: "NordeaSansSmall"
}

const theme = new Theme(BaseTheme, {
  font,
  fontWeight,
  color: { ...color, ...DealerpadSpecificColor },
  spacing,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  global: reset
})
  .add(HeadingStyling)
  .add(ParagraphStyling)
  .add(BoxStyling)
  .add(AlertStyling)
  .add(ListStyling)
  .add(TextStyling)
  .add(ButtonStyling)
  .add(InputStyling)
  .add(InputWrapperStyling)
  .add(LayoutStyling)
  .add(LayoutItemStyling)
  .add(LogoStyle)
  .add(AddIcon)
  .add(NewsIcon)
  .add(AlertIcon)
  .add(LoanIcon)
  .add(LeasingIcon)
  .add(LeasingPlusIcon)
  .add(PrivateRentIcon)
  .add(PrivateRentPlusIcon)
  .add(RentIcon)
  .add(AccountIcon)
  .add(CardIcon)
  .add(CheckmarkIcon)
  .add(DotIcon)
  .add(PhoneIcon)
  .add(MailIcon)
  .add(ArrowRightIcon)
  .add(NewBadgeBadgeStyling)
  .add(TagStyling)
  .add(PortalIcon)
  .add(PortalLabel)
export default theme
