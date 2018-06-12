import React from "react"
import PropTypes from "prop-types"
import Parameters from "./Parameters"
import Responses from "./Responses"

class Operation extends React.Component {
  render() {
    if (!this.props.operation) {
      return null
    }
    return (
      <div>
        <Parameters parameters={this.props.operation.parameters} />
        <Responses responses={this.props.operation.responses} />
      </div>
    )
  }
}

export default Operation

Operation.propTypes = {
  operation: PropTypes.object
}
