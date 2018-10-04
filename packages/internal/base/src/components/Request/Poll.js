import React from "react"
import PropTypes from "prop-types"
import Get from "./Get"

const Poll = ({ url, ...props }) => {
  return <Get url={url} poll {...props} />
}

Poll.propTypes = {
  url: PropTypes.string.isRequired
}

export default Poll
