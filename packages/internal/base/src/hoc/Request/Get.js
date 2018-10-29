import React from "react"
import PropTypes from "prop-types"

class Get extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.fetchData = this.fetchData.bind(this)
    this.state = {
      data: null,
      url: props.url
    }
    this.fetchData()
  }

  fetchData() {
    clearTimeout(this.timeout)

    const get = this.props.getFunction || window.fetch

    get(this.state.url, this.props.options)
      .then(this.props.mapData)
      .then(data => {
        if (this.props.hasChanged) {
          if (this.props.hasChanged(this.state.data, data)) {
            this.setState({ data })
          }
        } else {
          this.setState({ data })
        }

        if (this.props.poll) {
          this.timeout = setTimeout(
            () => this.fetchData(),
            this.props.pollingInterval
          )
        }
      })
      .catch(error => {
        this.props.onFailed(error)
        if (this.props.poll || this.props.retryOnFail) {
          this.timeout = setTimeout(
            () => this.fetchData(),
            this.props.pollingInterval
          )
        }
      })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.url !== prevState.url) {
      return { url: nextProps.url }
    }

    return null
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return this.props.children({ data: this.state.data })
  }
}

Get.propTypes = {
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
  getFunction: PropTypes.func,
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

export default Get

Get.defaultProps = {
  mapData: item => item,
  onFailed: console.error,
  options: {},
  poll: false,
  pollingInterval: 5000
}
