// Forms

/**
 * Icons!
 */
import QuestionMark from "./components/Icons/QuestionMark"

// Themes
import {
  cssResets,
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  themePropTypes,
  flattenGlobals,
  font,
  fontFamily,
  fontWeight,
  grid,
  gradient,
  spacing,
  targetSize,
  wrapper,
  getProp,
  mapProp,
  createVariants,
  createGlobal,
  VARIANT_DEFAULT,
  Theme
} from "./theming"

import {
  SanityBackend,
  Transform,
  Translate,
  Provider,
  withI18n,
  useI18n,
  I18nConsumer
} from "./components/i18n"

export { default as Input } from "./components/Forms/Input/Input"
export {
  default as BirthdateInput
} from "./components/Forms/Input/BirthdateInput/BirthdateInput"
export {
  default as CurrencyInput
} from "./components/Forms/Input/CurrencyInput/CurrencyInput"
export {
  default as AccountInput
} from "./components/Forms/Input/AccountInput/AccountInput"
export {
  default as PhoneInput
} from "./components/Forms/Input/PhoneInput/PhoneInput"
export {
  default as PostalCodeInput
} from "./components/Forms/Input/PostalCodeInput/PostalCodeInput"
export {
  default as NationalIdInput
} from "./components/Forms/Input/NationalIdInput/NationalIdInput"
export {
  default as CompanyInput
} from "./components/Forms/Input/CompanyInput/CompanyInput"
export {
  default as FileInput
} from "./components/Forms/Input/FileInput/FileInput"
export {
  default as EmailInput
} from "./components/Forms/Input/EmailInput/EmailInput"
export { default as Label } from "./components/Forms/Label/Label"
export { default as Legend } from "./components/Forms/Legend/Legend"
export { default as CheckBox } from "./components/Forms/CheckBox/CheckBox"
export {
  default as RadioButton
} from "./components/Forms/RadioButton/RadioButton"
export { default as RadioPill } from "./components/Forms/RadioPill/RadioPill"
export {
  default as RadioPillItem
} from "./components/Forms/RadioPill/RadioPill.Item"
export { default as CheckGroup } from "./components/Forms/CheckGroup/CheckGroup"
export { default as Slider } from "./components/Forms/Slider/Slider/Slider"
export {
  default as SliderKeyboardInput
} from "./components/Forms/Slider/SliderKeyboardInput/SliderKeyboardInput"
export {
  default as SelectSimple
} from "./components/Forms/SelectSimple/SelectSimple"
export { default as Select } from "./components/Forms/Select/Select"
export {
  default as SelectOption
} from "./components/Forms/Select/Select.Option"
export { default as Toggle } from "./components/Forms/Toggle/Toggle"
export { default as Form } from "./components/Forms/Form/Form"
export { default as FormField } from "./components/Forms/Form/FormField"
export {
  default as CreditCardInput
} from "./components/Forms/Input/CreditCard/CreditCardInput"
export { default as Select2 } from "./components/Forms/Select/Select2"
export { default as Slider2 } from "./components/Forms/Slider/Slider2/Slider2"
export {
  default as Slider2Track
} from "./components/Forms/Slider/Slider2/Slider2.Track"
export {
  default as Slider2Handle
} from "./components/Forms/Slider/Slider2/Slider2.Handle"

// Text
export { default as Text } from "./components/Text/Text/Text"
export { default as Heading } from "./components/Text/Heading/Heading"
export { default as Paragraph } from "./components/Text/Paragraph/Paragraph"
export { default as Tag } from "./components/Text/Tag/Tag"
export { default as Anchor } from "./components/Anchor/Anchor"
export { default as WidowFix } from "./components/Text/WidowFix/WidowFix"

// Lists
export { default as List } from "./components/Lists/List"
export {
  default as SplitListItem
} from "./components/Lists/SplitList/SplitListItem"
export {
  default as ExpandListItem
} from "./components/Lists/ExpandList/ExpandListItem"
export {
  default as LinkListItem
} from "./components/Lists/LinkList/LinkListItem"
export {
  default as InlineListItem
} from "./components/Lists/InlineList/InlineListItem"

// Expand
export { default as Expand } from "./components/Expand/Expand"

// Layout
export { default as Flag } from "./components/Layout/Flag/Flag"
export { default as Wrapper } from "./components/Layout/Wrapper/Wrapper"
export { default as Layout } from "./components/Layout/Layout/Layout"
export { default as LayoutItem } from "./components/Layout/Layout/LayoutItem"
export { default as Pack } from "./components/Layout/Pack/Pack"
export { default as PackItem } from "./components/Layout/Pack/PackItem"
export { default as ItemGroup } from "./components/Layout/ItemGroup/ItemGroup"
export { default as Divider } from "./components/Layout/Divider/Divider"

// Icons
export { default as Caret } from "./components/Icons/Caret"
export { default as CaretRight } from "./components/Icons/CaretRight"
export { default as Close } from "./components/Icons/Close"
export { default as Check } from "./components/Icons/Check"
export { default as Warning } from "./components/Icons/Warning"
export { default as Info } from "./components/Icons/Info"
export { default as Success } from "./components/Icons/Success"

// Images
export { default as Image } from "./components/Image/Image"

// Dataviz
export {
  default as ProgressBar
} from "./components/DataViz/ProgressBar/ProgressBar"
export { default as Fraction } from "./components/DataViz/Fraction/Fraction"
export { default as Donut } from "./components/DataViz/Donut/Donut"
export {
  default as KeyFigures
} from "./components/DataViz/Keyfigures/Keyfigures"
export { default as NewBadge } from "./components/NewBadge/NewBadge"
export { default as Loading } from "./components/DataViz/Loading/Loading"

// Loaders
export {
  default as FullScreenLoader
} from "./components/Loaders/FullScreenLoader/FullScreenLoader"

// Modal
export { default as Modal } from "./components/Modal/Modal"

// Buttons
export { default as Button } from "./components/Button/Button"

export { default as Alert } from "./components/Alert/Alert"

// Boxes
export { default as Box } from "./components/Layout/Box/Box"
export { default as Portal } from "./components/Portal/Portal"

// Styles
export { default as fontSmoothing } from "./theming/styles/fontsmoothing"
export { default as hideVisually } from "./theming/styles/hideVisually"

export const theming = {
  cssResets,
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  themePropTypes,
  flattenGlobals,
  font,
  fontFamily,
  fontWeight,
  grid,
  gradient,
  spacing,
  targetSize,
  wrapper,
  getProp,
  mapProp,
  createVariants,
  createGlobal,
  VARIANT_DEFAULT,
  Theme
}

export { default as ThemeComponent } from "./components/Theme/ThemeComponent"
export { default as GlobalStyle } from "./components/Theme/GlobalStyle"

// Formatters
export { default as Odometer } from "./components/Formatters/Odometer/Odometer"

// Logo
export { default as Logo } from "./components/Logo/Logo"

// Pagination
export { default as Pagination } from "./hoc/Pagination/Pagination"

// Code
export { default as CodeRenderer } from "./components/Code/CodeRenderer"
export { default as Table } from "./components/Table/Table"
export { default as Get } from "./hoc/Request/Get"
export { default as Fetch } from "./hoc/Request/Fetch"
export { default as Poll } from "./hoc/Request/Poll"
export { default as CopyToClipboard } from "./hoc/Clipboard/CopyToClipboard"
export {
  default as CopyToClipboardComponent
} from "./components/CopyToClipboard/CopyToClipboardComponent"

// State
export { default as State } from "./hoc/State/State"

// Wait
export { default as Wait } from "./hoc/Wait/Wait"

// Feature Toggle
export { default as FeatureToggle } from "./hoc/FeatureToggle/FeatureToggle"

export { default as BaseTheme } from "./theming/baseTheme"

export { default as WebFonts } from "./components/Theme/WebFonts"

export { default as Steps } from "./hoc/Steps/Steps"

// import Accordion from "./components/Accordion/Accordion"

/**
 * Hooks!
 */
export { default as useSearch } from "./hooks/useSearch/useSearch"
export { default as useTimer } from "./hooks/useTimer"

// Search
export { default as Search } from "./hoc/Search/Search"

export { default as Combobox } from "./components/Forms/Combobox/Combobox"

// Navigation
export { default as Breadcrumb } from "./components/Breadcrumb/Breadcrumb"

export { default as Development } from "./hoc/Development/Development"

export { default as SkeletonPulse } from "./components/Skeleton/Skeleton.Pulse"
export { default as SkeletonLine } from "./components/Skeleton/Skeleton.Line"
export {
  default as SkeletonCircle
} from "./components/Skeleton/Skeleton.Circle"

export const i18n = {
  SanityBackend,
  Transform,
  Translate,
  Provider,
  withI18n,
  useI18n,
  I18nConsumer
}

export { default as SanityRichText } from "./components/Sanity/SanityRichText"

export { default as useInterval } from "./hooks/useInterval"
export { default as useDebounce } from "./hooks/useDebounce"

export {
  default as dataFetcherFactory
} from "./context/dataFetcherFactory/dataFetcherFactory"

export const icons = {
  QuestionMark
}

require("es6-promise").polyfill()
require("isomorphic-fetch")
