import React from "react"
import PropTypes from "prop-types"
import Parameter from "./Parameter"
import { Heading } from "@staccx/base"

class Parameters extends React.Component {
  render() {
    if (!this.props.parameters) {
      return null
    }
    return (
      <div>
        <Heading>Parameters</Heading>
        {this.props.parameters.map(p => (
          <Parameter key={p.name} parameter={p} />
        ))}
      </div>
    )
  }
}

export default Parameters

Parameters.propTypes = {
  parameters: PropTypes.array
}
