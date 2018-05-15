import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"

const ValidationError = ({ children, className, ...otherProps }) => {
  return (
    <Error className={className} {...otherProps}>
      {children}
    </Error>
  )
}

const Error = styled.div`
  background-color: ${color.warning};
  color: ${color.white};
  padding: ${spacing.small} ${spacing.medium};
  position: relative;
  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid ${color.warning};
    top: -12px;
    left: 24px;
    position: absolute;
  }
`

ValidationError.defaultProps = {
  className: ""
}

ValidationError.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string
}

export default ValidationError
