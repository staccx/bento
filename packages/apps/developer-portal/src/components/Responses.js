import React from "react"
import PropTypes from "prop-types"
import Response from "./Response"
import { Heading } from "@staccx/base"

class Responses extends React.Component {
  render() {
    if (!this.props.responses) {
      return null
    }
    return (
      <div>
        <Heading>Responses</Heading>
        {Object.keys(this.props.responses).map(key => (
          <Response key={key} response={this.props.responses[key]} code={key} />
        ))}
      </div>
    )
  }
}

export default Responses

Responses.propTypes = {
  responses: PropTypes.object
}
