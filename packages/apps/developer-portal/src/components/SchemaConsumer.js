import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context/schema"

class SchemaConsumer extends React.Component {
  render() {
    return <Consumer>{props => this.props.children(props)}</Consumer>
  }
}

export default SchemaConsumer

SchemaConsumer.propTypes = {
  children: PropTypes.func.isRequired
}
