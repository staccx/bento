import PropTypes from "prop-types"
import copy from "copy-to-clipboard"
import React from "react"

class CopyToClipboard extends React.PureComponent {
  render() {
    return this.props.children({ copy, ...this.props })
  }
}

CopyToClipboard.propTypes = {
  children: PropTypes.func.isRequired
}
CopyToClipboard.defaultProps = {}

export default CopyToClipboard
