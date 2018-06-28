import React from "react"
import PropTypes from "prop-types"

class Fetch extends React.Component {
  constructor(props, context) {
    super(props, context)

    const get = this.props.get || window.fetch

    get(this.props.url, this.props.options)
      .then(this.props.mapData)
      .then(data => this.setState({ data }))

    this.state = {
      data: null
    }
  }

  render() {
    return this.props.children({ data: this.state.data })
  }
}

Fetch.propTypes = {
  children: PropTypes.func.isRequired,
  get: PropTypes.func,
  mapData: PropTypes.func,
  options: PropTypes.object,
  url: PropTypes.string.isRequired
}

export default Fetch

Fetch.defaultProps = {
  mapData: item => item,
  options: {}
}
