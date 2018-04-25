import React from "react"
import PropTypes from "prop-types"

const CaretRight = ({ className }) => (
  <svg className={className} width="13" height="19" viewBox="0 0 13 19">
    <path d="M2.8 0L0 2.8l6.6 6.6L0 16l2.8 2.8 9.4-9.4L2.8 0z" />
  </svg>
)

CaretRight.propTypes = { className: PropTypes.string }

export default CaretRight
