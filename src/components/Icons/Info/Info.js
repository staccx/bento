import React from "react"
import PropTypes from "prop-types"

const Info = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="24"
    height="24"
    className={className}
    fill="currentColor"
  >
    <path d="M16 3C8.83 3 3 8.83 3 16s5.83 13 13 13 13-5.83 13-13S23.17 3 16 3zm0 2c6.09 0 11 4.91 11 11s-4.91 11-11 11S5 22.09 5 16 9.91 5 16 5zm-1 5v2h2v-2zm0 4v8h2v-8z" />
  </svg>
)

Info.propTypes = {
  /**
   * This is the selection of a class to style the Info icon.
   */
  className: PropTypes.string
}

export default Info
