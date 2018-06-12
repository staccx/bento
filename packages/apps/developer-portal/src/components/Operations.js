import React from "react"
import PropTypes from "prop-types"
import Operation from "./Operation"

class Operations extends React.Component {
  render() {
    return this.props.operations.map(operation => (
      <Operation key={operation.operationId} operation={operation} />
    ))
  }
}

export default Operations

Operations.propTypes = {
  operations: PropTypes.array
}
