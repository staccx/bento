import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const OptionContainer = styled.div`
  display: block;
  width: 100%;
  min-height: ${p => p.theme.globals.targetSize.normal};
  margin: 0 auto;
  border-bottom: 1px solid ${p => p.theme.globals.color.line};
  padding: ${p => p.theme.globals.spacing.tiny}
    ${p => p.theme.globals.spacing.small};
  text-align: left;
  font-family: ${p => p.theme.globals.font.body};
  font-size: ${p => p.theme.globals.font.size.input};
  pointer: cursor;
  transition: border-color 0.2s ease-out;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${p => p.theme.globals.color.subtleHover};
  }

  &:last-child {
    border-bottom-width: 0;
  }
`

const SelectOption = ({ children, ...restProps }) => {
  return <OptionContainer {...restProps}>{children}</OptionContainer>
}

SelectOption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired
}

export default SelectOption
