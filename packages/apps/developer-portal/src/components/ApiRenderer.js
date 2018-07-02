import React from "react"
import PropTypes from "prop-types"
import axios from "axios"
import convertSwaggerToOpenApi from "../utils/convertSwaggerToOpenApi"
import Info from "./Info"
import Servers from "./Servers"
import SchemaProvider from "./OpenApiProvider"
import Tags from "./Tags"
class ApiRenderer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      openapi: null
    }
  }

  componentWillMount() {
    axios
      .get(this.props.url)
      .then(result => result.data)
      .then(docs => {
        if (docs.swagger && docs.swagger === "2.0") {
          console.log("swagger docs v2")
          convertSwaggerToOpenApi(docs, {}).then(({ openapi }) => {
            console.log(openapi)
            this.setState({ openapi })
          })
        }
      })
  }

  render() {
    const { openapi, tags } = this.state
    if (!openapi) {
      return <div>Nothing here</div>
    }
    return (
      <SchemaProvider
        requestBodies={openapi.components.requestBodies}
        schemas={openapi.components.schemas}
        securitySchemes={openapi.components.securitySchemes}
        openapi={openapi}
        tags={tags}
      >
        <Info info={openapi.info} />
        <Servers servers={openapi.servers} />
        <Tags />
      </SchemaProvider>
    )
  }
}

export default ApiRenderer

ApiRenderer.propTypes = {
  url: PropTypes.string.isRequired
}
