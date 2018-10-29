import React from "react"
import PropTypes from "prop-types"

class Wait extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      ready: false
    }

    this.timeout = setTimeout(() => {
      this.setState({ ready: true })
    }, props.waitTime)
  }

  render() {
    return this.props.children({ ready: this.state.ready })
  }
}

Wait.propTypes = {
  children: PropTypes.func.isRequired,
  waitTime: PropTypes.number
}

Wait.defaultProps = {
  waitTime: 1000
}

export default Wait
