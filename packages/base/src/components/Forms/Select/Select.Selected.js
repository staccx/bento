import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SelectedContainer = styled.button`
  display: block;
  width: 100%;
  min-height: ${p => p.theme.targetSize.normal};
  margin: 0 auto;
  border: 1px solid ${p => p.theme.color.line};
  border-radius: ${p => p.theme.borderRadius};
  padding-left: ${p => p.theme.spacing.small};
  padding-right: ${p => p.theme.spacing.small};
  text-align: left;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.font.size.input};
  pointer: cursor;
  transition: border-color 0.2s ease-out;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${p => p.theme.color.subtleHover};
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
