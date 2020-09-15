import { css } from "styled-components"
import createGlobal from "./utils/createGlobal"

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
    const newTheme = Object.assign({}, theme, ...props)

    // v5 All keys should be added to root.
    Object.keys(newTheme).forEach(key => {
      this[key] = newTheme[key]
    })
  }

  /**
   * Add whatever you need to the theme
   * @param styles - array or object
   * @returns {Theme}
   */
  add(styles) {
    const val = Array.isArray(styles) ? styles.reduce(styleReducer, {}) : styles
    return new Theme(this, val)
  }

  append(styles) {
    const val = Array.isArray(styles) ? styles.reduce(styleReducer, {}) : styles
    const newTheme = Object.assign({}, this, val)

    // TODO: Should we reset the theme here before setting the attributes?
    // for (const key of Object.keys(this)) {
    //   delete this[key]
    // }
    Object.keys(newTheme).forEach(key => {
      this[key] = newTheme[key]
    })
  }

  setBaseSize(baseSize) {
    this.baseSize = baseSize
    this.append(
      createGlobal({
        fontSize: css`
          font-size: ${baseSize}px;
        `
      })
    )
  }
}
