import React from "react"
import PropTypes from "prop-types"
import Parameters from "./Parameters"
import Responses from "./Responses"
import RequestBody from "./RequestBody"
import OpenApiConsumer from "./OpenApiConsumer"

class Operation extends React.Component {
  render() {
    if (!this.props.operation) {
      return null
    }
    return (
      <OpenApiConsumer>
        {({ openapi }) => (
          <div>
            <Parameters parameters={this.props.operation.parameters} />
            <RequestBody
              requestBody={this.props.operation.requestBody}
              openapi={openapi}
            />
            <Responses responses={this.props.operation.responses} />
          </div>
        )}
      </OpenApiConsumer>
    )
  }
}

export default Operation

Operation.propTypes = {
  operation: PropTypes.object
}
