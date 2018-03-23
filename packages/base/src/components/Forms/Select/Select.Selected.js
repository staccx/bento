import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SelectedContainer = styled.button`
  display: block;
  width: 100%;
  min-height: ${p => p.theme.globals.targetSize.normal};
  margin: 0 auto;
  border: 1px solid ${p => p.theme.globals.color.line};
  border-radius: ${p => p.theme.globals.borderRadius};
  padding-left: ${p => p.theme.globals.spacing.small};
  padding-right: ${p => p.theme.globals.spacing.small};
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
`

const SelectSelected = ({ selectedItem, buttonProps, ...restProps }) => {
  return (
    <SelectedContainer {...buttonProps} {...restProps}>
      {selectedItem.text} {selectedItem.value}
    </SelectedContainer>
  )
}

SelectSelected.propTypes = {
  selectedItem: PropTypes.object,
  buttonProps: PropTypes.object
}

export default SelectSelected
