import React from "react"
import PropTypes from "prop-types"

class Get extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.fetchData = this.fetchData.bind(this)
    this.state = {
      data: null
    }

    if (this.props.initialDelay) {
      setTimeout(() => this.fetchData(), this.props.initialDelay)
    } else {
      this.fetchData()
    }
  }

  fetchData() {
    clearTimeout(this.timeout)

    const get = this.props.getFunction || window.fetch

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

        if (this.props.poll) {
          this.timeout = setTimeout(() => {
            if (this.mounted) {
              this.fetchData()
            }
          }, this.props.pollingInterval)
        }
      })
      .catch(error => {
        this.props.onFailed(error)
        if (this.props.poll || this.props.retryOnFail) {
          this.timeout = setTimeout(() => {
            if (this.mounted) {
              this.fetchData()
            }
          }, this.props.pollingInterval)
        }
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.stop && this.props.stop !== prevProps.stop) {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ data: null })
    }
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
    }
    this.mounted = false
  }

  render() {
    return this.props.children({ data: this.state.data })
  }
}

Get.propTypes = {
  /**
   * Render function
   */
  children: PropTypes.func,
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
  pollingInterval: PropTypes.number,
  /**
   * Initial delay
   */
  initialDelay: PropTypes.number
}

export default Get

Get.defaultProps = {
  mapData: item => item,
  onFailed: console.error,
  options: {},
  poll: false,
  pollingInterval: 5000,
  initialDelay: 0
}