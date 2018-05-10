import Input, * as InputStyles from "./components/Forms/Input/Input"
import CurrencyInput from "./components/Forms/Input/CurrencyInput/CurrencyInput"
import AccountInput from "./components/Forms/Input/AccountInput/AccountInput"
import PhoneInput from "./components/Forms/Input/PhoneInput/PhoneInput"
import NationalIdInput from "./components/Forms/Input/NationalIdInput/NationalIdInput"
import CompanyInput, * as CompanyInputStyles from "./components/Forms/Input/CompanyInput/CompanyInput"
import Label, * as LabelStyles from "./components/Forms/Label/Label"
import CheckBox, {
  COMPONENT_CHECKBOX_ICON
} from "./components/Forms/CheckBox/CheckBox"
import RadioButton from "./components/Forms/RadioButton/RadioButton"
import RadioPill from "./components/Forms/RadioPill/RadioPill"
import RadioPillItem from "./components/Forms/RadioPill/RadioPill.Item"
import CheckGroup from "./components/Forms/CheckGroup/CheckGroup"
import Slider, * as SliderStyles from "./components/Forms/Slider/Slider/Slider"
import SliderKeyboardInput, * as SliderKeyboardInputStyles from "./components/Forms/Slider/SliderKeyboardInput/SliderKeyboardInput"
import SelectSimple, * as SelectSimpleStyles from "./components/Forms/SelectSimple/SelectSimple"
import Select from "./components/Forms/Select/Select"
import SelectSelected from "./components/Forms/Select/Select.Selected"
import SelectOption from "./components/Forms/Select/Select.Option"
import Toggle from "./components/Forms/Toggle/Toggle"
// list
import List from "./components/Lists/List"
import SplitListItem from "./components/Lists/SplitList/SplitListItem"
import ExpandListItem, * as ExpandListItemStyles from "./components/Lists/ExpandList/ExpandListItem"
import LinkListItem from "./components/Lists/LinkList/LinkListItem"
import InlineListItem from "./components/Lists/InlineList/InlineListItem"
// layout
import Flag from "./components/Layout/Flag/Flag"
import Wrapper from "./components/Layout/Wrapper/Wrapper"
import Box, * as BoxStyles from "./components/Layout/Box/Box"
import Layout, * as LayoutStyles from "./components/Layout/Layout/Layout"
import LayoutItem, * as LayoutItemStyles from "./components/Layout/Layout/LayoutItem"
import Pack from "./components/Layout/Pack/Pack"
import PackItem from "./components/Layout/Pack/PackItem"
import ItemGroup, * as ItemGroupStyles from "./components/Layout/ItemGroup/ItemGroup"
// Icons
import Caret from "./components/Icons/Caret"
import CaretRight from "./components/Icons/CaretRight"
import Close from "./components/Icons/Close"
import Warning from "./components/Icons/Warning"
import Info from "./components/Icons/Info"
import Success from "./components/Icons/Success"

// formatters
import Odometer from "./components/Formatters/Odometer/Odometer"
// Dataviz
import ProgressBar from "./components/DataViz/ProgressBar/ProgressBar"
import Fraction from "./components/DataViz/Fraction/Fraction"
import Donut from "./components/DataViz/Donut/Donut"
import KeyFigures from "./components/DataViz/Keyfigures/Keyfigures"

import Modal, * as ModalStyles from "./components/Modal/Modal"

import NewBadge, * as NewBadgeStyles from "./components/NewBadge/NewBadge"

import Button, * as ButtonStyles from "./components/Button/Button"
import Alert, * as AlertStyles from "./components/Alert/Alert"

import fontSmoothing from "./Styles/fontsmoothing"
import hideVisually from "./Styles/hideVisually"

import { default as BaseTheme } from "./theme/baseTheme"
// TODO: Trengs denne?
import JsonSchema from "./components/Forms/JsonSchema/JsonSchema"

require("es6-promise").polyfill()
require("isomorphic-fetch")

const Icons = {
  COMPONENT_CHECKBOX_ICON
}

export {
  AccountInput,
  Alert,
  AlertStyles,
  BaseTheme,
  Box,
  BoxStyles,
  Button,
  ButtonStyles,
  Caret,
  CaretRight,
  CheckBox,
  CheckGroup,
  Close,
  CompanyInput,
  CompanyInputStyles,
  CurrencyInput,
  Donut,
  ExpandListItem,
  ExpandListItemStyles,
  Flag,
  fontSmoothing,
  Fraction,
  hideVisually,
  Icons,
  Info,
  InlineListItem,
  Input,
  InputStyles,
  ItemGroup,
  ItemGroupStyles,
  JsonSchema,
  KeyFigures,
  Label,
  LabelStyles,
  Layout,
  LayoutItem,
  LayoutItemStyles,
  LayoutStyles,
  LinkListItem,
  List,
  Modal,
  ModalStyles,
  NationalIdInput,
  NewBadge,
  NewBadgeStyles,
  Odometer,
  Pack,
  PackItem,
  PhoneInput,
  ProgressBar,
  RadioButton,
  RadioPill,
  RadioPillItem,
  Select,
  SelectOption,
  SelectSelected,
  SelectSimple,
  SelectSimpleStyles,
  Slider,
  SliderKeyboardInput,
  SliderKeyboardInputStyles,
  SliderStyles,
  SplitListItem,
  Success,
  Toggle,
  Warning,
  Wrapper
}
