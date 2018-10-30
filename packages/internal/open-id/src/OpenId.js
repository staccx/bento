import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"

class OpenId extends React.Component {
  render() {
    return <Consumer>{props => this.props.children(props)}</Consumer>
  }
}

OpenId.propTypes = {
  children: PropTypes.func
}

export default OpenId
