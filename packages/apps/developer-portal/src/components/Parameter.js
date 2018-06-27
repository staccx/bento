import React from "react"
import PropTypes from "prop-types"
import { Paragraph } from "@staccx/base"
import SchemaRenderer from "./SchemaRenderer"

class Parameter extends React.Component {
  render() {
    if (!this.props.parameter) {
      return null
    }

    return (
      <div>
        <Paragraph>Name: {this.props.parameter.name}</Paragraph>
        <Paragraph>In: {this.props.parameter.in}</Paragraph>
        <Paragraph>Description: {this.props.parameter.description}</Paragraph>
        <Paragraph>
          Required: {this.props.parameter.required ? "Yes" : "No"}
        </Paragraph>
        <SchemaRenderer
          schema={this.props.parameter.schema}
          name={this.props.parameter.name}
        />
      </div>
    )
  }
}

export default Parameter

Parameter.propTypes = {
  parameter: PropTypes.object
}
