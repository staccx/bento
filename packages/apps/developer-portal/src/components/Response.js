import React from "react"
import PropTypes from "prop-types"
import { Paragraph } from "@staccx/base"
import ResponseContent from "./ResponseContent"

class Response extends React.Component {
  render() {
    console.log(this.props.response)
    return (
      <div>
        <Paragraph>
          {this.props.code} - {this.props.response.description}
        </Paragraph>
        {Object.keys(this.props.response.content).map(type => (
          <ResponseContent
            type={type}
            content={this.props.response.content[type]}
          />
        ))}
      </div>
    )
  }
}

export default Response
