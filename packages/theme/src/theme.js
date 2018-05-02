const { Map } = require("immutable")

export default class theme {
  constructor(theme, ...props) {
    const map = Map({})
    this.theme = map.mergeDeep(...theme, ...props).toJS()
  }

  get get() {
    return this.theme
  }

  addStyles(...styles) {
    const map = Map({})
    this.theme = map.mergeDeep(this.theme, ...styles).toJS()
    return this
  }
}
