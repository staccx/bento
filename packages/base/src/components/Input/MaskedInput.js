import React from "react"
import PropTypes from "prop-types"
var textMaskCore = require("text-mask-core")

class MaskedInput extends React.Component {
  constructor(...args) {
    super(...args)

    this.onChange = this.onChange.bind(this)
    console.log(textMaskCore)
  }

  initTextMask() {
    const { props, props: { value } } = this

    this.textMaskInputElement = textMaskCore.createTextMaskInputElement({
      inputElement: this.inputElement,
      ...props
    })
    this.textMaskInputElement.update(value)
  }

  componentDidMount() {
    this.initTextMask()
  }

  componentDidUpdate() {
    this.initTextMask()
  }

  render() {
    const props = { ...this.props }

    delete props.mask
    delete props.guide
    delete props.pipe
    delete props.placeholderChar
    delete props.keepCharPositions
    delete props.value
    delete props.onChange
    delete props.showMask

    return (
      <input
        {...props}
        onChange={this.onChange}
        defaultValue={this.props.value}
        ref={inputElement => (this.inputElement = inputElement)}
      />
    )
  }

  onChange(event) {
    this.textMaskInputElement.update()

    if (typeof this.props.onChange === "function") {
      this.props.onChange(event)
    }
  }
}

MaskedInput.propTypes = {
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool,
    PropTypes.shape({
      mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
      pipe: PropTypes.func
    })
  ]).isRequired,
  guide: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pipe: PropTypes.func,
  placeholderChar: PropTypes.string,
  keepCharPositions: PropTypes.bool,
  showMask: PropTypes.bool
}
/** @component */
export default MaskedInput
