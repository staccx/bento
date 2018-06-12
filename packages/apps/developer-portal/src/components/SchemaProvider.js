import PropTypes from "prop-types"
import React from "react"
import { Provider } from "./context/schema"

class SchemaProvider extends React.Component {
  render() {
    return (
      <Provider
        value={{
          requestBodies: this.props.requestBodies,
          securitySchemes: this.props.securitySchemes,
          schemas: this.props.schemas,
          openapi: this.props.openapi
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
