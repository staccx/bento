import React from "react"
import PropTypes from "prop-types"

class Fetch extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.fetchData = this.fetchData.bind(this)
    this.state = {
      data: null
    }
    this.fetchData()
  }

  fetchData() {
    clearTimeout(this.timeout)

    const get = this.props.get || window.fetch

    get(this.props.url, this.props.options)
      .then(this.props.mapData)
      .then(data => {
        if (this.props.hasChanged) {
          if (this.props.hasChanged(this.state.data, data)) {
            this.setState({ data })
          }
        } else {
          this.setState({ data })
        }
      })

    if (this.props.poll) {
      this.timeout = setTimeout(
        () => this.fetchData(),
        this.props.pollingInterval
      )
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
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
  poll: PropTypes.bool,
  pollingInterval: PropTypes.number,
  url: PropTypes.string.isRequired
}

export default Fetch

Fetch.defaultProps = {
  mapData: item => item,
  options: {},
  poll: false,
  pollingInterval: 5000
}
