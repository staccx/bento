import PropTypes from "prop-types"
import React from "react"
import fallback from "./onePixel"
import Loading from "../DataViz/Loading/Loading"

const isEmpty = obj =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object

class Logo extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      brand: null,
      error: null,
      isLoading: true
    }

    this.search = this.search.bind(this)
  }

  componentDidMount() {
    setTimeout(() => this.search(this.props.brand), 1000)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.brand !== this.props.brand) {
      this.search(nextProps.brand)
    }
  }

  search(searchForBrand) {
    if (searchForBrand && this.props.token && window.fetch) {
      this.setState({ isLoading: true })
      window
        .fetch(`https://logos.staccflow.com/api/brand/${searchForBrand}`, {
          headers: {
            Authorization: `Bearer ${this.props.token}`
          }
        })
        .then(response => response.json())
        .then(brand => {
          this.setState({
            brand: !isEmpty(brand) ? brand : null,
            isLoading: false
          })
        })
        .catch(error => {
          this.setState({ isLoading: false, error })
        })
    } else {
      console.error("Could not fetch brand", searchForBrand, window.fetch)
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }

    if (!this.state.brand) {
      if (this.props.renderFallback) {
        return this.props.renderFallback()
      }
      return (
        <img
          src={fallback}
          alt=""
          height={this.props.height}
          width={this.props.width}
        />
      )
    }

    return (
      <img
        height={this.props.height}
        width={this.props.width}
        src={this.state.brand.url}
        alt={this.state.brand.name}
      />
    )
  }
}

export default Logo

Logo.propTypes = {
  brand: PropTypes.string.isRequired,
  height: PropTypes.number,
  renderFallback: PropTypes.func,
  token: PropTypes.string.isRequired,
  width: PropTypes.number
}

Logo.defaultProps = {
  height: 48
}
