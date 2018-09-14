import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"

class OIDCConsumer extends React.Component {
  render() {
    return <Consumer>{props => this.props.children(props)}</Consumer>
  }
}

OIDCConsumer.propTypes = {
  children: PropTypes.func.isRequired
}

export default OIDCConsumer
