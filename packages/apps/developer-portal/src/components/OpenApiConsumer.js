import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context/openApi"

class OpenApiConsumer extends React.Component {
  render() {
    return <Consumer>{props => this.props.children(props)}</Consumer>
  }
}

export default OpenApiConsumer

OpenApiConsumer.propTypes = {
  children: PropTypes.func.isRequired
}
