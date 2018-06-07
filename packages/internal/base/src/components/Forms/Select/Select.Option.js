import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  targetSize,
  spacing,
  fontFamily,
  font,
  color,
  themeProps
} from "@staccx/theme"

const OptionContainer = styled.div`
  width: 100%;
  min-height: ${targetSize.normal};
  margin: 0 auto;
  padding: ${spacing.tiny()} ${spacing.small()};
  text-align: left;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  pointer: cursor;
  transition: border-color 0.2s ease-out;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${p =>
    p.isSelected &&
    css`
      padding-right: ${spacing("mediumPlus")(p)};
      white-space: nowrap;

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
`

const SelectOption = ({ children, isSelected, ...restProps }) => {
  return (
    <OptionContainer isSelected={isSelected} {...restProps}>
      <div>{children}</div>
    </OptionContainer>
  )
}

SelectOption.defaultProps = {
  isSelected: false
}

SelectOption.propTypes = {
  children: themeProps.children.isRequired,
  isSelected: PropTypes.bool
}

export default SelectOption
