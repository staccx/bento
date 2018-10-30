import React from "react"
import PropTypes from "prop-types"

class State extends React.Component {
  render() {
    return this.props.children({
      change: state => this.setState({ ...state }),
      set: state => this.setState({ ...state }),
      ...this.state
    })
  }
}

State.propTypes = {
  children: PropTypes.func
}

export default State
