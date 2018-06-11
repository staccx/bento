import PropTypes from "prop-types"
import React from "react"
import fallback from "./onePixel"

class Logo extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      brand: null
    }
  }

  componentWillMount() {
    if (this.props.brand && this.props.token && window.fetch) {
      window
        .fetch(`http://logos.staccflow.com/api/brand/${this.props.brand}`, {
          headers: {
            Authorization: `Bearer ${this.props.token}`
          },
          "Cache-Control": "no-cache"
        })
        .then(response => response.json())
        .then(brand => {
          this.setState({ brand })
        })
    }
  }

  render() {
    if (!this.state.brand) {
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
  width: PropTypes.number,
  token: PropTypes.string.isRequired
}

Logo.defaultProps = {
  height: 48
}
