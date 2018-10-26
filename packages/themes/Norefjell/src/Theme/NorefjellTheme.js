import { BaseTheme, theming } from "@staccx/base"
import reset from "./reset"
import Button from "./Theme.Button"
import Modal from "./Theme.Wrapper"
import DashboardBox from "./Theme.Box"
import { LogoStyle } from "./Theme.Logo"
import { FooterStyle } from "./Footer/Footer"
import NewBadgeStyles from "./Theme.NewBadge"
import { ExpandListButtonStyle } from "../components/Transaction.ExpandButton"
import ExpandListExpanded from "../components/ExpandListItem.Expanded"
import { MenuStyle } from "../components/MenuList"
import { CheckboxCheckedIcon, CheckboxCheckedLabel } from "./Theme.Checkbox"
import { IconArrowDown } from "./Icons/Icon.ArrowDown"
import { IconArrowRight } from "./Icons/Icon.ArrowRight"
import { IconArrowUp } from "./Icons/Icon.ArrowUp"
import { IconLogout } from "./Icons/Icon.Logout"
import { IconPrices } from "./Icons/Icon.Prices"
import { IconProfile } from "./Icons/Icon.Profile"
import { IconAccountStatement } from "./Icons/Icon.AccountStatement"
import { LayoutStyling, LayoutItemStyling } from "./theme.Layouts"
import { IconCaretRight } from "./Icons/Icon.CaretRight"
import { IconInvoice } from "./Icons/Icon.Invoice"
import { IconDue } from "./Icons/Icon.Due"
import { IconInsurance } from "./Icons/Icon.Insurance"
import { IconPdf } from "./Icons/Icon.Pdf"
import { IconAnnualStatement } from "./Icons/Icon.AnnualStatement"
import { IconContracts } from "./Icons/Icon.Contracts"
import { IconDownpayment } from "./Icons/Icon.Downpayment"
import HeadingStyles from "./Theme.Headings"
import { TextStyling } from "./Theme.Texts"
import { IconLoggedOutConfirmation } from "./Icons/Icon.LoggedOutConfirmation"
const { Theme } = theming

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
  bg: "#F8F8F8",
  bgGray: "#F9F7F7",
  primary: "#3297BF",
  secondary: "#55C4B4",
  gray: "#767676",
  text: "#2b2b2b",
  white: "#fff",
  line: "#EBEBF2",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#FB8D90",
  positive: "#3297BF",
  negative: "#FB8D90",
  black: "#000",
  subtleHover: "#F7F7FF"
}

const BiBSpecificColor = {
  accountHeading: theming.color.disabled,
  accountEarned: theming.color.secondary,
  accountBalance: theming.color.primary,
  accountLoan: theming.color.negative,
  expandedItem: theming.color.white,
  accountInfoBorder: theming.color.line,
  accountFilter: "#2EB6BE",
  invoice: "#3297BF",
  mainButton: "#2EB6BE"
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

const BiBSpecificFont = {
  accountBalance: font.h1,
  accountBalanceDecimals: font.tiny,
  transactionHeading: font.h6
}

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans"
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

export default new Theme(BaseTheme, {
  name: "Norfjell",
  layout: {
    dashboardLayout: "columnNarrow",
    menuArea: "aside"
  },
  font: { ...font, ...BiBSpecificFont },
  fontWeight,
  color: { ...color, ...BiBSpecificColor },
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  spacing,
  global: reset
})
  .add(Button)
  .add(DashboardBox)
  .add(Modal)
  .add(ExpandListExpanded)
  .add(NewBadgeStyles)
  .add(MenuStyle)
  .add(ExpandListButtonStyle)
  .add(FooterStyle)
  .add(LogoStyle)
  .add(LogoStyle)
  .add(CheckboxCheckedIcon)
  .add(CheckboxCheckedLabel)
  .add(IconArrowDown)
  .add(IconArrowRight)
  .add(IconArrowUp)
  .add(IconLogout)
  .add(IconPrices)
  .add(IconProfile)
  .add(LayoutStyling)
  .add(LayoutItemStyling)
  .add(IconCaretRight)
  .add(IconAccountStatement)
  .add(IconInvoice)
  .add(IconDue)
  .add(IconInsurance)
  .add(IconPdf)
  .add(IconAnnualStatement)
  .add(IconContracts)
  .add(IconDownpayment)
  .add(HeadingStyles)
  .add(TextStyling)
  .add(IconLoggedOutConfirmation)
