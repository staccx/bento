import React from "react"
import styled from "styled-components"
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
  border-bottom: 1px solid ${color.line};
  padding: ${spacing.tiny()} ${spacing.small()};
  text-align: left;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  pointer: cursor;
  transition: border-color 0.2s ease-out;
  display: flex;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${color.subtleHover};
  }

  &:last-child {
    border-bottom-width: 0;
  }
`

const SelectOption = ({ children, ...restProps }) => {
  return <OptionContainer {...restProps}>{children}</OptionContainer>
}

SelectOption.propTypes = {
  children: themeProps.children.isRequired
}

export default SelectOption
