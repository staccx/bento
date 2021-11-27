/**
 * To allow SSR support
 */
import "regenerator-runtime/runtime.js"

/**
 * Animations
 */
import {
  AppearIn,
  BounceIn,
  BounceOut,
  Draw,
  FadeIn,
  FadeInFromTop,
  ScaleIn,
  ScaleInX,
  ScaleInY,
  SlideInFromLeft,
  SlideInFromRight,
  SlideInFromTop
} from "./animations"
/**
 * Formatting
 */
import {
  abbreviateCurrency,
  CURRENCY_DISPLAY,
  dashIt,
  formatDate,
  formatDateDistance,
  formatDateRelative,
  formatMoney,
  formatName,
  formatNumber,
  maskFormat,
  removeWhitespace,
  STYLE,
  truncate,
  UNIT_DISPLAY,
  UNITS
} from "./formatting"
/**
 * Math functions
 */
import {
  almostEquals,
  clamp,
  cosineInterpolate,
  inverseLerp,
  isNumber,
  lerp,
  multiplyPixelValue
} from "./math"
/**
 * Open-Id
 */
import {
  CallbackLogin,
  CallbackLoginSilent,
  CallbackLogout,
  Logout,
  OpenId,
  OpenIdContext,
  useCallbackLogin,
  useCallbackLoginSilent,
  useCallbackLogout,
  useLogout,
  useOpenId,
  useOpenIdUser,
  useOtpLogin,
  useUrlLogin
} from "./open-id"
/**
 * Sanity specific
 */
import {
  BlockContent,
  Document,
  Image as SanityImage,
  List as SanityList,
  Provider as SanityProvider,
  Query,
  useSanity,
  useSanityQuery
} from "./sanity"
/**
 * Theming
 */
import {
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  createGlobal,
  createVariants,
  cssResets,
  flattenGlobals,
  font,
  fontFamily,
  fontSmoothing,
  fontWeight,
  getField,
  getProp,
  gradient,
  grid,
  hideVisually,
  logger,
  mapProp,
  spacing,
  targetSize,
  Theme,
  theme,
  themePropTypes,
  themes,
  VARIANT_DEFAULT,
  wrapper
} from "./theming"
/**
 * Utils
 */
import { distinct, flatten, partition, stringIncludes } from "./utils"
/**
 * i18n
 */
import {
  languages,
  Provider,
  resourceReducer,
  RESTBackend,
  SanityBackend,
  Transform,
  Translate,
  TranslateSSR,
  useI18n
} from "./i18n"
/**
 * Locale
 */
import { LocaleProvider, locales, useLocale } from "./locale"
/**
 * Hooks
 */
import {
  useApiRequest,
  useBackoff,
  useBrRegSearch,
  useCopyToClipboard,
  useDebounce,
  useExchangeRates,
  useInputMask,
  useInterval,
  useLogging,
  useMutationObserver,
  usePostalCode,
  useSearch,
  useTimer,
  useWebFonts
} from "./hooks"
/**
 * Components
 */
import {
  Alert,
  Anchor,
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
  DevicePreview,
  Divider,
  Donut,
  Expand,
  ExpandListItem,
  FileInput,
  Flag,
  Fraction,
  FullScreenLoader,
  GlobalStyle,
  Heading,
  Image,
  Info,
  InlineListItem,
  Input,
  ItemGroup,
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
  NewBadge,
  Pack,
  PackItem,
  Paragraph,
  ProgressBar,
  QuestionMark,
  RadioButton,
  RadioPill,
  RadioPillItem,
  SelectSimple,
  SkeletonCircle,
  SkeletonLine,
  SkeletonPulse,
  Slider,
  SliderKeyboardInput,
  SliderTick,
  SliderTrack,
  SplitListItem,
  Success,
  Table,
  Tag,
  Text,
  ThemeComponent,
  ThemeProvider,
  Toggle,
  Warning,
  WebFonts,
  WidowFix,
  Wrapper
} from "./components"

export const animations = {
  AppearIn,
  BounceIn,
  BounceOut,
  Draw,
  FadeIn,
  FadeInFromTop,
  ScaleIn,
  ScaleInX,
  ScaleInY,
  SlideInFromLeft,
  SlideInFromRight,
  SlideInFromTop
}

export const formatting = {
  abbreviateCurrency,
  CURRENCY_DISPLAY,
  dashIt,
  formatDate,
  formatDateDistance,
  formatDateRelative,
  formatMoney,
  formatName,
  formatNumber,
  maskFormat,
  removeWhitespace,
  STYLE,
  truncate,
  UNIT_DISPLAY,
  UNITS
}

export const math = {
  almostEquals,
  clamp,
  cosineInterpolate,
  inverseLerp,
  isNumber,
  lerp,
  multiplyPixelValue
}

export const openId = {
  useLogout,
  CallbackLogin,
  CallbackLoginSilent,
  CallbackLogout,
  Logout,
  OpenId,
  OpenIdContext,
  useCallbackLogin,
  useCallbackLoginSilent,
  useCallbackLogout,
  useOpenId,
  useOpenIdUser,
  useOtpLogin,
  useUrlLogin
}

export const sanity = {
  BlockContent,
  Document,
  SanityImage,
  SanityList,
  SanityProvider,
  Query,
  useSanity,
  useSanityQuery
}

/**
 * Theming
 */

export const theming = {
  VARIANT_DEFAULT,
  fontWeight,
  fontFamily,
  font,
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  createGlobal,
  createVariants,
  cssResets,
  flattenGlobals,
  fontSmoothing,
  getProp,
  getField,
  gradient,
  grid,
  hideVisually,
  logger,
  mapProp,
  spacing,
  targetSize,
  Theme,
  theme,
  themePropTypes,
  themes,
  wrapper
}
export const utils = { distinct, flatten, partition, stringIncludes }

export const i18n = {
  useI18n,
  languages,
  Provider,
  resourceReducer,
  RESTBackend,
  SanityBackend,
  Transform,
  Translate,
  TranslateSSR
}

export {}

export const locale = { locales, LocaleProvider, useLocale }

export const hooks = {
  useApiRequest,
  useBrRegSearch,
  useCopyToClipboard,
  useDebounce,
  useExchangeRates,
  useInterval,
  useLogging,
  usePostalCode,
  useSearch,
  useTimer,
  useMutationObserver,
  useInputMask,
  useWebFonts,
  useBackoff
}

export {
  AppearIn,
  BounceIn,
  BounceOut,
  Draw,
  FadeIn,
  FadeInFromTop,
  ScaleIn,
  ScaleInX,
  ScaleInY,
  SlideInFromLeft,
  SlideInFromRight,
  SlideInFromTop,
  abbreviateCurrency,
  CURRENCY_DISPLAY,
  dashIt,
  formatDate,
  formatDateDistance,
  formatDateRelative,
  formatMoney,
  formatName,
  formatNumber,
  maskFormat,
  removeWhitespace,
  STYLE,
  truncate,
  UNIT_DISPLAY,
  UNITS,
  almostEquals,
  clamp,
  cosineInterpolate,
  inverseLerp,
  isNumber,
  lerp,
  multiplyPixelValue,
  CallbackLogin,
  CallbackLoginSilent,
  CallbackLogout,
  Logout,
  OpenId,
  OpenIdContext,
  useCallbackLogin,
  useCallbackLoginSilent,
  useCallbackLogout,
  useLogout,
  useOpenId,
  useOpenIdUser,
  useOtpLogin,
  useUrlLogin,
  BlockContent,
  Document,
  SanityImage,
  SanityList,
  SanityProvider,
  Query,
  useSanity,
  useSanityQuery,
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  createGlobal,
  createVariants,
  cssResets,
  flattenGlobals,
  font,
  fontFamily,
  fontSmoothing,
  fontWeight,
  getProp,
  gradient,
  grid,
  hideVisually,
  logger,
  mapProp,
  spacing,
  targetSize,
  Theme,
  theme,
  themePropTypes,
  themes,
  VARIANT_DEFAULT,
  wrapper,
  distinct,
  flatten,
  partition,
  stringIncludes,
  useI18n,
  languages,
  Provider,
  resourceReducer,
  RESTBackend,
  SanityBackend,
  Transform,
  Translate,
  TranslateSSR,
  locales,
  LocaleProvider,
  useLocale,
  useApiRequest,
  useBrRegSearch,
  useCopyToClipboard,
  useDebounce,
  useExchangeRates,
  useInterval,
  useLogging,
  usePostalCode,
  useSearch,
  useTimer,
  useMutationObserver,
  useInputMask,
  useWebFonts,
  useBackoff,
  Logo,
  Loading,
  Alert,
  Anchor,
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
  DevicePreview,
  Divider,
  Donut,
  Expand,
  ExpandListItem,
  FileInput,
  Flag,
  Fraction,
  FullScreenLoader,
  GlobalStyle,
  Heading,
  Image,
  Info,
  InlineListItem,
  Input,
  ItemGroup,
  KeyFigures,
  Label,
  Layout,
  LayoutItem,
  Legend,
  LinkListItem,
  List,
  Modal,
  NewBadge,
  Pack,
  PackItem,
  Paragraph,
  ProgressBar,
  QuestionMark,
  RadioButton,
  RadioPill,
  RadioPillItem,
  SelectSimple,
  SkeletonCircle,
  SkeletonLine,
  SkeletonPulse,
  Slider,
  SliderKeyboardInput,
  SliderTick,
  SliderTrack,
  SplitListItem,
  Success,
  Table,
  Tag,
  Text,
  ThemeComponent,
  ThemeProvider,
  Toggle,
  Warning,
  WebFonts,
  WidowFix,
  Wrapper
}
