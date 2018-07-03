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
import themePropTypes from "../../constants/themePropTypes"

const themeProps = {
  selectedContainer: {
    name: "SELECT_SELECTED",
    description: "Selected style",
    type: themePropTypes.style
  }
}
export const SelectedContainer = styled.button`
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
  cursor: pointer;
  transition: border-color 0.2s ease-out;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${color.subtleHover};
  }

  ${themify(themeProps.selectedContainer)};
`

const SelectSelected = ({
  selectedItem,
  buttonProps,
  variant,
  ...restProps
}) => {
  return (
    <SelectedContainer variant={variant} {...buttonProps} {...restProps}>
      {selectedItem.text} {selectedItem.value}
    </SelectedContainer>
  )
}

SelectSelected.propTypes = {
  selectedItem: PropTypes.object,
  buttonProps: PropTypes.object
}

SelectSelected.themeProps = themeProps

export default SelectSelected
