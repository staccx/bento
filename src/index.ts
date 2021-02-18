/**
 * To allow SSR support
 */
import "regenerator-runtime/runtime.js"

/**
 * Animations
 */
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
  SlideInFromTop
} from "./animations"

/**
 * Formatting
 */
export {
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
export {
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
export {
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
} from "./open-id"

/**
 * Sanity specific
 */
export {
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

export {
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
} from "./theming"
/**
 * Utils
 */
export { distinct, flatten, partition, stringIncludes } from "./utils"

/**
 * i18n
 */
export {
  useI18n,
  languages,
  Provider,
  resourceReducer,
  RESTBackend,
  SanityBackend,
  Transform,
  Translate,
  TranslateSSR
} from "./i18n"

/**
 * Locale
 */
export { locales, LocaleProvider, useLocale } from "./locale"

/**
 * Hooks
 */
export {
  useApiRequest,
  useBrRegSearch,
  useCopyToClipboard,
  useDebounce,
  useExchangeRates,
  useInterval,
  useLogging,
  usePostalCode,
  useSearch,
  useTimer
} from "./hooks"

/**
 * Components
 */
export {
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
} from "./components"
