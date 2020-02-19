import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import selectThemeProps from "./Select.themeProps"
import {
  applyVariants,
  borderRadius,
  targetSize,
  spacing,
  fontFamily,
  font,
  color
} from "../../../theming"
import { commonPropTypes } from "../../../constants/themeContants"

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

const OptionContainer = styled.button`
  display: block;
  width: 100%;
  min-height: ${targetSize.normal};
  margin: 0 auto;
  padding: ${spacing.tiny} ${spacing.mediumPlus} ${spacing.tiny}
    ${spacing.small};
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
  ${applyVariants(selectThemeProps.optionContainer)};
`

SelectOption.defaultProps = {
  isSelected: false
}

SelectOption.propTypes = {
  children: commonPropTypes.children.isRequired,
  isSelected: PropTypes.bool
}

export default SelectOption