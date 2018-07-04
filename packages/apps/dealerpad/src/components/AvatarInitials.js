import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const shortenToInitials = name => {
  const longName = name.toString()
  const initials = longName.match(/\b\w/g) || []
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase()
}

const AvatarInitials = ({ name, className }) => (
  <Avatar className={className}>{shortenToInitials(name)}</Avatar>
)

const Avatar = styled.div`
  background-color: ${color.subtleHover};
  width: ${spacing.mediumPlus};
  height: ${spacing.mediumPlus};
  border-radius: ${spacing.mediumPlus};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

shortenToInitials.propTypes = {
  name: PropTypes.string.isRequired
}

AvatarInitials.defaultProps = {
  className: ""
}

AvatarInitials.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default AvatarInitials
