import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  borderRadius,
  targetSize,
  spacing,
  fontFamily,
  font,
  color,
  themeProps,
  themify
} from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

const SelectOption = ({ children, isSelected, variant, ...restProps }) => {
  return (
    <OptionContainer
      isSelected={isSelected}
      variant={variant}
      type="button"
      {...restProps}
    >
      <div>{children}</div>
    </OptionContainer>
  )
}

SelectOption.themeProps = {
  optionContainer: {
    name: "SELECT_DEFAULT_OPTION",
    description: "Select default option style",
    type: themePropTypes.style
  }
}

const OptionContainer = styled.button`
  display: block;
  width: 100%;
  min-height: ${targetSize.normal};
  margin: 0 auto;
  padding: ${spacing.tiny()} ${spacing.small()};
  background-color: ${color.white};
  border: none;
  text-align: left;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  cursor: pointer;
  transition: border-color 0.2s ease-out;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${p =>
    p.isSelected &&
    css`
      white-space: nowrap;
      border-radius: ${borderRadius};

      > div {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${color.subtleHover};
  }
  ${themify(SelectOption.themeProps.optionContainer)};
`

SelectOption.defaultProps = {
  isSelected: false
}

SelectOption.propTypes = {
  children: themeProps.children.isRequired,
  isSelected: PropTypes.bool
}

export default SelectOption
