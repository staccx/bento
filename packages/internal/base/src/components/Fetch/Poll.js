import React from "react"
import PropTypes from "prop-types"
import Fetch from "./Fetch"

const Poll = ({ url, ...props }) => {
  return <Fetch url={url} poll {...props} />
}

Poll.propTypes = {
  url: PropTypes.string.isRequired
}

export default Poll
