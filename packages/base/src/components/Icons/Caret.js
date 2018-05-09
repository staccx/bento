import React from "react"
import PropTypes from "prop-types"

const Caret = ({ className }) => (
  <svg className={className} width="19" height="13" viewBox="0 0 33 20">
    <path d="M16.5 12.15L28.19.87c.52-.5 1.35-.5 1.87.01l2.05 2.02a1.3 1.3 0 0 1 0 1.86L17.44 19.12a1.36 1.36 0 0 1-1.88 0L.9 4.76A1.3 1.3 0 0 1 .89 2.9L2.94.88c.52-.5 1.35-.5 1.87 0L16.5 12.14v.01z" />
  </svg>
)

Caret.propTypes = { className: PropTypes.string }

export default Caret
