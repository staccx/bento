import PropTypes from "prop-types"
import React from "react"

/**
 * Formatting for an img tag
 */
const Logo = ({ brand, height, width, className }) => (
  <img
    height={height}
    width={width}
    src={`https://api.logos.staccsandbox.com/${brand}`}
    alt={brand}
    className={className}
  />
)

export default Logo

Logo.propTypes = {
  brand: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
}

Logo.defaultProps = {
  height: 48
}
