// Convenience
// Theme class
import Theme from "./Theme"

export { default as borderRadius } from "./convenience/borderRadius"
export { default as color } from "./convenience/color"
export { default as font } from "./convenience/font"
export { default as fontFamily } from "./convenience/fontFamily"
export { default as fontWeight } from "./convenience/fontWeight"
export { default as grid } from "./convenience/grid"
export { default as spacing } from "./convenience/spacing"
export { default as targetSize } from "./convenience/targetSize"
export { default as wrapper } from "./convenience/wrapper"
export { default as gradient } from "./convenience/gradient"
// Utils
export { default as getProp, getField } from "./utils/getProp"
export { default as mapProp } from "./utils/mapProp"
export { default as createVariants } from "./utils/createVariants"
export { default as createGlobal } from "./utils/createGlobal"
export { default as applyVariants } from "./utils/applyVariants"
export { default as flattenGlobals } from "./utils/flattenGlobals"

export {
  commonPropTypes,
  VARIANT_DEFAULT,
  themePropTypes
} from "./themeContants"

// Styles
export { default as cssResets } from "./styles/cssResets"
export { default as fontSmoothing } from "./styles/fontsmoothing"
export { default as hideVisually } from "./styles/hideVisually"
export { themeLogger as logger } from "./theme.logger"
const instance = new Theme()

const themes = {
  _default: instance
}

const classNames = name => instance.get(name)

export { themes, instance as theme, Theme, classNames }
