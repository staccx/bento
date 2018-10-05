import { css } from "styled-components"
const { Map } = require("immutable")

const styleReducer = (acc, curr) => {
  Object.keys(curr).forEach(key => {
    acc[key] = {
      ...acc[key],
      ...curr[key]
    }
  })
  return acc
}

/**
 * Simple class for managing styles in the Bento world
 */
export default class Theme {
  constructor(theme, ...props) {
    const map = Map({})
    const newTheme = map.mergeDeep(theme, ...props).toJS()

    // v5 All keys should be added to root.
    Object.keys(newTheme).forEach(key => {
      this[key] = newTheme[key]
    })
  }

  /** TODO: Accept array of styles
   * Add whatever you need to the theme
   * @param styles - array or object
   * @returns {Theme}
   */
  add(styles) {
    const val = Array.isArray(styles) ? styles.reduce(styleReducer, {}) : styles
    return new Theme(this, val)
  }

  /**
   * Append a style to global
   * @param globalStyle
   * @return {Theme}
   */
  appendGlobal(globalStyle) {
    let global = css`
      ${this.reset ? this.reset(this) : null};
      ${this.global};
      ${globalStyle};
    `
    return new Theme(this, { global })
  }
}
