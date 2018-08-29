import PropTypes from "prop-types"
import React from "react"

const Logo = ({ brand, height, width }) => (
  <img
    height={height}
    width={width}
    src={`https://api.logos.stacctest.com/${brand}`}
    alt={brand}
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
