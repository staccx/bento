import merge from "lodash.merge"

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
  classNames = []
  constructor(theme, ...props) {
    const newTheme = merge(theme, ...props)

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
    const newTheme = merge(this, val)

    // TODO: Should we reset the theme here before setting the attributes?
    // for (const key of Object.keys(this)) {
    //   delete this[key]
    // }
    Object.keys(newTheme).forEach(key => {
      this[key] = newTheme[key]
    })
  }

  register(name, className) {
    this.classNames[name] = className
  }

  get(names) {
    if (!Array.isArray(names)) {
      names = [names]
    }
    return names.map(name => this.classNames[name]).join(" ")
  }
}
