import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  font,
  color,
  themify
} from "@staccx/theme"

const SelectedContainer = styled.button`
  display: block;
  width: 100%;
  min-height: ${targetSize.normal};
  margin: 0 auto;
  border: 1px solid ${color.line};
  border-radius: ${borderRadius};
  padding-left: ${spacing.small()};
  padding-right: ${spacing.small()};
  text-align: left;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  pointer: cursor;
  transition: border-color 0.2s ease-out;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${color.subtleHover};
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
