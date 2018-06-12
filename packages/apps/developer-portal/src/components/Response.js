import React from "react"
import PropTypes from "prop-types"
import { Paragraph } from "@staccx/base"
import ResponseContent from "./ResponseContent"

class Response extends React.Component {
  render() {
    return (
      <div>
        <Paragraph>
          {this.props.code} - {this.props.response.description}
        </Paragraph>
        {this.props.response.content &&
          Object.keys(this.props.response.content).map(type => (
            <ResponseContent
              key={this.props.code + type}
              type={type}
              content={this.props.response.content[type]}
            />
          ))}
      </div>
    )
  }
}

export default Response

Response.propTypes = {
  code: PropTypes.any,
  response: PropTypes.any
}
