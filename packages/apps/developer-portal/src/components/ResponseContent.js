import React from "react"
import PropTypes from "prop-types"
import SchemaRenderer from "./SchemaRenderer"
import { Heading } from "@staccx/base"

class ResponseContent extends React.Component {
  render() {
    return (
      <div>
        <Heading level={"h2"}>{this.props.type}</Heading>
        <SchemaRenderer
          schema={this.props.content.schema}
          name={this.props.type}
        />
      </div>
    )
  }
}

export default ResponseContent

ResponseContent.propTypes = {
  content: PropTypes.any,
  type: PropTypes.string
}
