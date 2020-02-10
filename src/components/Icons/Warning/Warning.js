import React from "react"
import PropTypes from "prop-types"

const Warning = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M16 3.22l-.88 1.5-12 20.78-.84 1.5h27.44l-.84-1.5-12-20.78zm0 4L26.25 25H5.75zM15 14v6h2v-6zm0 7v2h2v-2z" />
  </svg>
)

Warning.propTypes = {
  /**
   * This is the selection of the class that styles the success component
   */
  className: PropTypes.string
}

export default Warning
