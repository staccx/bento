import React, { Component } from "react"
import PropTypes from "prop-types"

class FrameRenderer extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      states: props.states,
      current: props.initialState,
      send: () => null,
      events: []
    }
  }

  render() {
    return this.props.children({ ...this.state })
  }
}

FrameRenderer.propTypes = {}

export default FrameRenderer
