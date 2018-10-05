import React from "react"
import PropTypes from "prop-types"
import { Button } from "@staccx/base"
import { Link } from "react-router-dom"

const BackButton = ({ to, label }) => (
  <Link
    to={{
      pathname: to,
      state: {
        duration: 600,
        transition: "backwards"
      }
    }}
  >
    <Button variant="back">{label}</Button>
  </Link>
)

BackButton.defaultProps = {
  label: "Tilbake"
}

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default BackButton
