import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  themePropTypes,
  commonPropTypes
} from "../../../constants/themeContants"
import {
  applyVariants,
  font,
  color,
  spacing,
  targetSize
} from "../../../theming"

const Tag = ({ children, className, variant, ...rest }) => (
  <TagWrapper className={className} variant={variant} {...rest}>
    {children}
  </TagWrapper>
)

Tag.themeProps = {
  tag: {
    name: "tag",
    description: "A span with padding around it",
    type: themePropTypes.style
  }
}

const TagWrapper = styled.span`
  display: inline-block;
  font-size: ${font.tiny};
  text-align: center;
  padding: calc(${spacing.tiny} / 2) calc(${spacing.medium} / 1.5);
  border-radius: ${targetSize.normal};
  background-color: ${color.subtleHover};
  color: ${color.primary};
  min-height: ${spacing.medium};
  ${applyVariants(Tag.themeProps.tag)};
`

Tag.defaultProps = {
  className: null
}

Tag.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string
}

export default Tag
