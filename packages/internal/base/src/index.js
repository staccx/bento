// Forms
import Input from "./components/Forms/Input/Input"
import BirthdateInput from "./components/Forms/Input/BirthdateInput/BirthdateInput"
import CurrencyInput from "./components/Forms/Input/CurrencyInput/CurrencyInput"
import AccountInput from "./components/Forms/Input/AccountInput/AccountInput"
import PhoneInput from "./components/Forms/Input/PhoneInput/PhoneInput"
import PostalCodeInput from "./components/Forms/Input/PostalCodeInput/PostalCodeInput"
import NationalIdInput from "./components/Forms/Input/NationalIdInput/NationalIdInput"
import CompanyInput from "./components/Forms/Input/CompanyInput/CompanyInput"
import FileInput from "./components/Forms/Input/FileInput/FileInput"
import EmailInput from "./components/Forms/Input/EmailInput/EmailInput"
import Label from "./components/Forms/Label/Label"
import Legend from "./components/Forms/Legend/Legend"
import CheckBox from "./components/Forms/CheckBox/CheckBox"
import RadioButton from "./components/Forms/RadioButton/RadioButton"
import RadioPill from "./components/Forms/RadioPill/RadioPill"
import RadioPillItem from "./components/Forms/RadioPill/RadioPill.Item"
import CheckGroup from "./components/Forms/CheckGroup/CheckGroup"
import Slider from "./components/Forms/Slider/Slider/Slider"
import SliderKeyboardInput from "./components/Forms/Slider/SliderKeyboardInput/SliderKeyboardInput"
import SelectSimple from "./components/Forms/SelectSimple/SelectSimple"
import Select from "./components/Forms/Select/Select"
import SelectOption from "./components/Forms/Select/Select.Option"
import Toggle from "./components/Forms/Toggle/Toggle"
import Form from "./components/Forms/Form/Form"
import FormField from "./components/Forms/Form/FormField"
import CreditCardInput from "./components/Forms/Input/CreditCard/CreditCardInput"
import Select2 from "./components/Forms/Select/Select2"
import Slider2 from "./components/Forms/Slider/Slider2/Slider2"
import Slider2Track from "./components/Forms/Slider/Slider2/Slider2.Track"
import Slider2Handle from "./components/Forms/Slider/Slider2/Slider2.Handle"

// Text
import Text from "./components/Text/Text/Text"
import Heading from "./components/Text/Heading/Heading"
import Paragraph from "./components/Text/Paragraph/Paragraph"
import Tag from "./components/Text/Tag/Tag"
import Anchor from "./components/Anchor/Anchor"

// Lists
import List from "./components/Lists/List"
import SplitListItem from "./components/Lists/SplitList/SplitListItem"
import ExpandListItem from "./components/Lists/ExpandList/ExpandListItem"
import LinkListItem from "./components/Lists/LinkList/LinkListItem"
import InlineListItem from "./components/Lists/InlineList/InlineListItem"

// Expand
import Expand from "./components/Expand/Expand"

// Layout
import Flag from "./components/Layout/Flag/Flag"
import Wrapper from "./components/Layout/Wrapper/Wrapper"
import Layout from "./components/Layout/Layout/Layout"
import LayoutItem from "./components/Layout/Layout/LayoutItem"
import Pack from "./components/Layout/Pack/Pack"
import PackItem from "./components/Layout/Pack/PackItem"
import ItemGroup from "./components/Layout/ItemGroup/ItemGroup"
import Divider from "./components/Layout/Divider/Divider"

// Icons
import Caret from "./components/Icons/Caret"
import CaretRight from "./components/Icons/CaretRight"
import Close from "./components/Icons/Close"
import Check from "./components/Icons/Check"
import Warning from "./components/Icons/Warning"
import Info from "./components/Icons/Info"
import Success from "./components/Icons/Success"

// Images
import Image from "./components/Image/Image"

// Dataviz
import ProgressBar from "./components/DataViz/ProgressBar/ProgressBar"
import Fraction from "./components/DataViz/Fraction/Fraction"
import Donut from "./components/DataViz/Donut/Donut"
import KeyFigures from "./components/DataViz/Keyfigures/Keyfigures"
import NewBadge from "./components/NewBadge/NewBadge"
import Loading from "./components/DataViz/Loading/Loading"

// Modal
import Modal from "./components/Modal/Modal"

// Buttons
import Button from "./components/Button/Button"

import Alert from "./components/Alert/Alert"

// Boxes
import Box from "./components/Layout/Box/Box"
import Portal from "./components/Portal/Portal"

// Styles
import fontSmoothing from "./theming/styles/fontsmoothing"
import hideVisually from "./theming/styles/hideVisually"

// Themes
import * as theming from "./theming"
import ThemeComponent from "./components/Theme/ThemeComponent"
import GlobalStyle from "./components/Theme/GlobalStyle"

// Formatters
import Odometer from "./components/Formatters/Odometer/Odometer"

// Utils
import JsonSchema from "./components/Forms/JsonSchema/JsonSchema"

// Logo
import Logo from "./components/Logo/Logo"

// Pagination
import Pagination from "./hoc/Pagination/Pagination"

// Code
import CodeRenderer from "./components/Code/CodeRenderer"
import Table from "./components/Table/Table"
import Get from "./hoc/Request/Get"
import Fetch from "./hoc/Request/Fetch"
import Poll from "./hoc/Request/Poll"
import CopyToClipboard from "./hoc/Clipboard/CopyToClipboard"
import CopyToClipboardComponent from "./components/CopyToClipboard/CopyToClipboardComponent"

// State
import State from "./hoc/State/State"

// Wait
import Wait from "./hoc/Wait/Wait"

// Feature Toggle
import FeatureToggle from "./hoc/FeatureToggle/FeatureToggle"

import BaseTheme from "./theming/baseTheme"

import WebFonts from "./components/Theme/WebFonts"

import Steps from "./hoc/Steps/Steps"

// import Accordion from "./components/Accordion/Accordion"

/**
 * Icons!
 */
import QuestionMark from "./components/Icons/QuestionMark"

/**
 * Hooks!
 */
import useSearch from "./hooks/useSearch"
import useTimer from "./hooks/useTimer"

// Search
import Search from "./hoc/Search/Search"

import Combobox from "./components/Forms/Combobox/Combobox"

// Navigation
import Breadcrumb from "./components/Breadcrumb/Breadcrumb"

import Development from "./hoc/Development/Development"

const icons = {
  QuestionMark
}

require("es6-promise").polyfill()
require("isomorphic-fetch")

export {
  Anchor,
  AccountInput,
  Alert,
  BaseTheme,
  BirthdateInput,
  theming,
  Box,
  Breadcrumb,
  Button,
  Caret,
  CaretRight,
  Check,
  CheckBox,
  CheckGroup,
  Close,
  CodeRenderer,
  Combobox,
  CompanyInput,
  CopyToClipboard,
  CopyToClipboardComponent,
  CreditCardInput,
  CurrencyInput,
  Development,
  Divider,
  Donut,
  EmailInput,
  Expand,
  ExpandListItem,
  Get,
  GlobalStyle,
  Fetch,
  FeatureToggle,
  FileInput,
  Flag,
  fontSmoothing,
  Form,
  FormField,
  Fraction,
  Heading,
  hideVisually,
  icons,
  Image,
  Info,
  InlineListItem,
  Input,
  ItemGroup,
  JsonSchema,
  KeyFigures,
  Label,
  Layout,
  LayoutItem,
  Legend,
  LinkListItem,
  List,
  Loading,
  Logo,
  Modal,
  NationalIdInput,
  NewBadge,
  Odometer,
  Pack,
  PackItem,
  Pagination,
  Paragraph,
  PhoneInput,
  Poll,
  Portal,
  PostalCodeInput,
  ProgressBar,
  RadioButton,
  RadioPill,
  RadioPillItem,
  Search,
  Select,
  Select2,
  Slider2Track,
  Slider2Handle,
  SelectOption,
  SelectSimple,
  State,
  Slider,
  Slider2,
  SliderKeyboardInput,
  SplitListItem,
  Steps,
  Success,
  Table,
  Tag,
  Text,
  ThemeComponent,
  Toggle,
  useSearch,
  useTimer,
  Wait,
  Warning,
  WebFonts,
  Wrapper
}
