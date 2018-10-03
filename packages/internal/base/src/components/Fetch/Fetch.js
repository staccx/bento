import React from "react"
import PropTypes from "prop-types"
// TODO: Rename to <Get />
// TODO: Fix issue with url changing
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
      .catch(this.props.onFailed)

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
  /**
   * Render function
   */
  children: PropTypes.func.isRequired,
  /**
   * Url to data
   */
  url: PropTypes.string.isRequired,
  /**
   * fetch function. defaults to window.fetch
   */
  get: PropTypes.func,
  /**
   * Override this to reduce rerenders when polling. (old, nu) => ...
   */
  hasChanged: PropTypes.any,
  /**
   * Override to shape data before it returns in function.
   */
  mapData: PropTypes.func,
  /**
   * Callback when a get fails
   */
  onFailed: PropTypes.func,
  /**
   * Options sent to the fetch function. Headers, body, params etc...
   */
  options: PropTypes.object,
  /**
   * If true will poll url every *pollingInterval*
   */
  poll: PropTypes.bool,
  /**
   * Interval in which polling will be done. Ignored if poll == false
   */
  pollingInterval: PropTypes.number
}

export default Fetch

Fetch.defaultProps = {
  mapData: item => item,
  onFailed: console.error,
  options: {},
  poll: false,
  pollingInterval: 5000
}
