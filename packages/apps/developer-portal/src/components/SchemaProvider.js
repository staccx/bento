import PropTypes from "prop-types"
import React from "react"
import { Provider } from "./context/schema"
import findTags from "../utils/findTags"
import sortByTags from "../utils/sortByTags"

class SchemaProvider extends React.Component {
  constructor (props, context) {
    super(props, context)
    const tags = this.props.tags || findTags(this.props.openapi)
    this.state = {
      tags,
      sorted: sortByTags(this.props.openapi, tags)
    }
  }

  render() {
    return (
      <Provider
        value={{
          requestBodies: this.props.requestBodies,
          securitySchemes: this.props.securitySchemes,
          schemas: this.props.schemas,
          openapi: this.props.openapi,
          tags: this.state.tags,
          sorted: this.state.sorted
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export default SchemaProvider

SchemaProvider.propTypes = {
  children: PropTypes.any.isRequired,
  requestBodies: PropTypes.any,
  schemas: PropTypes.any,
  securitySchemes: PropTypes.any
}
