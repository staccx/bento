import React from "react"
import PropTypes from "prop-types"
import SchemaRenderer from "./SchemaRenderer"

class ResponseContent extends React.Component {
  render() {
    console.log(this.props.content)
    return (
      <div>
        {this.props.type}
        <SchemaRenderer schema={this.props.content.schema} />
      </div>
    )
  }
}

export default ResponseContent
