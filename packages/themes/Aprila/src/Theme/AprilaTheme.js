import { BaseTheme, theming } from "@staccx/base"
import { lighten, rgba } from "polished"
import reset from "./reset"
import Button from "./Theme.Button"
import Box from "./Theme.Box"
import { LogoStyle } from "./Theme.Logo"
import {
  CheckBoxWrapper,
  CheckboxCheckedIcon,
  CheckboxLabel,
  CheckboxCheckedLabel
} from "./Theme.Checkbox"
import { IconArrowDown } from "./Icons/Icon.ArrowDown"
import { IconArrowUp } from "./Icons/Icon.ArrowUp"
import { IconLogout } from "./Icons/Icon.Logout"
import { IconProfile } from "./Icons/Icon.Profile"
import { FooterStyle } from "./Footer/Footer"
import { AdStyle } from "./Ad"
import { ExpandListButtonStyle } from "../components/Transaction.ExpandButton"
import ExpandListExpanded from "../components/ExpandListItem.Expanded"
import { MenuStyle } from "../components/MenuRow"
import { AccountHeading } from "../components/AccountHeading"
import { IconArrowRight } from "./Icons/Icon.ArrowRight"
import { IconPrices } from "./Icons/Icon.Prices"
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
import { IllustrationAnnualStatement } from "./Illustrations/Illustration.AnnualStatement"
import SplitListItem from "./Theme.SplitListItem"
import { ListStyling } from "./Theme.Lists"
import { LabelStyling } from "./Theme.Labels"
import {
  InputHelpBoxStyling,
  InputInputStyling,
  InputLabelStyling,
  InputWrapperStyling
} from "./Theme.Inputs"
import ImageVariants from "./Image.Variants"
import SelectVariants from "./Select.Variants"
import AlertStyling from "./Theme.Alerts"
import LoadingVariants from "./Loading.Variants"

const { Theme } = theming

const borderRadius = "3px"
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
  bg: "#fff",
  bgGray: "#F2F1FC",
  purpleBg: "#F1EFFE",
  primary: "#3B2C7C",
  mainButton: "#3B2C7C",
  primaryLight: "#948fc5",
  secondary: "#FF7E68",
  secondaryLight: "#FECDC6",
  gray: "#767676",
  text: "#3b2c7c",
  white: "#fff",
  line: "#D3D3F4",
  wcag: "#777",
  disabled: "#BABABA",
  warning: "#f53b1c",
  positive: "#3B2C7C",
  negative: "#FF7E68",
  black: "#000",
  subtleHover: "#F2F1FC"
}

const BiBSpecificColor = {
  accountHeading: color.bgGray,
  accountEarned: color.bgGray,
  accountBalance: color.secondary,
  expandedItem: lighten(0.05, color.line),
  accountInfoBorder: rgba(color.white, 0.25),
  transactionHeader: color.primary
}

const font = {
  h1: "36px",
  h2: "28px",
  h3: "20px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "14px",
  tiny: "12px",
  input: "16px",
  huge: "44px"
}

const fontWeight = {
  bold: 700,
  normal: 400,
  light: 400
}

const BiBSpecificFont = {
  accountBalance: "48px",
  accountBalanceDecimals: font.h2,
  transactionHeading: font.base
}

const fontFamily = {
  heading: "Roboto",
  body: "Roboto"
}

const webfonts = {
  google: {
    families: ["Roboto:400,700"]
  }
}

const t = new Theme(BaseTheme, {
  name: "Aprila",
  layout: {
    dashboardLayout: "stonehenge",
    menuArea: "main"
  },
  webfonts,
  font: { ...font, ...BiBSpecificFont },
  color: { ...color, ...BiBSpecificColor },
  fontWeight,
  wrapper,
  targetSize,
  borderRadius,
  headerHeight,
  fontFamily,
  spacing,
  bib: {
    loan: false,
    deposit: true,
    transactionsFrontpage: true
  }
})
  .add(reset)
  .add(Button)
  .add(Box)
  .add(ExpandListExpanded)
  .add(MenuStyle)
  .add(ExpandListButtonStyle)
  .add(FooterStyle)
  .add(LogoStyle)
  .add(LogoStyle)
  .add(CheckBoxWrapper)
  .add(CheckboxCheckedIcon)
  .add(CheckboxLabel)
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
  .add(SplitListItem)
  .add(IllustrationAnnualStatement)
  .add(AdStyle)
  .add(ListStyling)
  // .add(MenuColumnStyle)
  .add(LabelStyling)
  .add(InputInputStyling)
  .add(InputLabelStyling)
  .add(InputHelpBoxStyling)
  .add(InputWrapperStyling)
  .add(AccountHeading)
  .add(ImageVariants)
  .add(SelectVariants)
  .add(AlertStyling)
  .add(LoadingVariants)

export default t
