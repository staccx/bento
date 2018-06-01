const { Map } = require("immutable")

export default class Theme {
  constructor(theme, ...props) {
    const map = Map({})
    const newTheme = map.mergeDeep(theme, ...props).toJS()

    //v5 All keys should be added to root.
    Object.keys(newTheme).forEach(key => {
      this[key] = newTheme[key]
    })
  }

  /**
   * @deprecated
   * Deprecated. add should now return this.
   * Will be remove in next version
   * @returns {*}
   */
  get get() {
    return this
  }

  /**
   * @deprecated
   * Use add
   * @param styles
   * @returns {Theme}
   */
  addStyles(...styles) {
    return new Theme(this, ...styles)
  }

  /**
   * Add whatever you need to the theme
   * @param styles
   */
  add(...styles) {
    return new Theme(this, ...styles)
  }
}
