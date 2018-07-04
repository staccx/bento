import React from "react"
import styled from "styled-components"
import { spacing, color, targetSize, font } from "@staccx/theme"

const Tag = ({ children, className, ...rest }) => (
  <TagWrapper className={className} {...rest}>
    {children}
  </TagWrapper>
)

const TagWrapper = styled.span`
  display: inline-block;
  font-size: ${font.tiny};
  text-align: center;
  padding: calc(${spacing.tiny} / 2) calc(${spacing.medium} / 1.5);
  border-radius: ${targetSize.normal};
  background-color: ${color.white};
  color: ${color.primary};
`

export default Tag
