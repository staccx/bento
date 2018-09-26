import React from "react"
import PropTypes from "prop-types"

class State extends React.Component {
  render() {
    return this.props.children({
      change: state => this.setState({ ...state }),
      ...this.state
    })
  }
}

State.propTypes = {
  children: PropTypes.func.isRequired
}

export default State
