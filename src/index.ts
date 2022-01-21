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
  font,
  fontFamily,
  fontSmoothing,
  fontWeight,
  getField,
  getProp,
  gradient,
  grid,
  mapProp,
  spacing,
  targetSize,
  themePropTypes,
  VARIANT_DEFAULT,
  wrapper
} from "./theming"
/**
 * Utils
 */
import { distinct, flatten, partition, stringIncludes } from "./utils"

/**
 * Hooks
 */
import { useBackoff } from "./hooks/useBackoff/useBackoff"
import {
  useBrRegSearch,
  useCopyToClipboard,
  useDebounce,
  useInputMask,
  useInterval,
  useMutationObserver,
  useSearch,
  useTimer
} from "./hooks"

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

  fontSmoothing,
  getProp,
  getField,
  gradient,
  grid,
  mapProp,
  spacing,
  targetSize,
  themePropTypes,
  wrapper
}
export const utils = { distinct, flatten, partition, stringIncludes }

export const hooks = {
  useBrRegSearch,
  useCopyToClipboard,
  useDebounce,
  useInterval,
  useSearch,
  useTimer,
  useMutationObserver,
  useInputMask,
  useBackoff
}

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
  UNITS,
  almostEquals,
  clamp,
  cosineInterpolate,
  inverseLerp,
  isNumber,
  lerp,
  multiplyPixelValue,
  applyVariants,
  borderRadius,
  color,
  commonPropTypes,
  createGlobal,
  createVariants,
  cssResets,
  font,
  fontFamily,
  fontSmoothing,
  fontWeight,
  getProp,
  gradient,
  grid,
  mapProp,
  spacing,
  targetSize,
  themePropTypes,
  VARIANT_DEFAULT,
  wrapper,
  distinct,
  flatten,
  partition,
  stringIncludes,
  useBrRegSearch,
  useCopyToClipboard,
  useDebounce,
  useInterval,
  useSearch,
  useTimer,
  useMutationObserver,
  useInputMask,
  useBackoff
}
