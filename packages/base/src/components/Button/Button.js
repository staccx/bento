/**
 * @class Button
 */
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import withTheme from '../../utils/withTheme'


const StyledButton = styled.button`
  ${props => props.themeStyle(props)}
`

const Button = ({children, ...rest}) => (
  <StyledButton {...rest}>{children}</StyledButton>
)

const defaultProps = {
  onClick: null,
  to: "#",
  className: ""
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

/** @component */
export default withTheme(Button)
