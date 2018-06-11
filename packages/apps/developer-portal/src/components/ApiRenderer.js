import React from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { Wrapper } from "@staccx/base"
import convertSwaggerToOpenApi from "../utils/convertSwaggerToOpenApi"
import Info from "./Info"
import Servers from "./Servers"
import Path from "./Path"
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
    const { openapi } = this.state
    if (!openapi) {
      return <div>Nothing here</div>
    }
    return (
      <Wrapper>
        <Info info={openapi.info} />
        <Servers servers={openapi.servers} />
        {Object.keys(openapi.paths).map(key => (
          <Path key={key} path={openapi.paths[key]} name={key} />
        ))}
      </Wrapper>
    )
  }
}

export default ApiRenderer

ApiRenderer.propTypes = {
  url: PropTypes.string.isRequired
}
