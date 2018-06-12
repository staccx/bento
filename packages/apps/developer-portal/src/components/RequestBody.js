import React from "react"
import PropTypes from "prop-types"
import SchemaRenderer from "./SchemaRenderer"
import { Heading } from "@staccx/base"

class RequestBody extends React.Component {
  render() {
    if (!this.props.requestBody) {
      return null
    }
    return (
      <div>
        <Heading>Response body</Heading>
        <SchemaRenderer schema={this.props.requestBody} />
      </div>
    )
  }
}

export default RequestBody
