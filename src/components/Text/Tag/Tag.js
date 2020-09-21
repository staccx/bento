import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  applyVariants,
  font,
  color,
  spacing,
  targetSize,
  commonPropTypes
} from "../../../theming"
import themeProps from "./Tag.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * Tag are used to add content and additional info to objects.
 */
const Tag = ({ children, className, variant, ...rest }) => (
  <TagWrapper className={className} variant={variant} {...rest}>
    {children}
  </TagWrapper>
)

const TagWrapper = styled.span`
  display: inline-block;
  font-size: ${font.tiny};
  text-align: center;
  padding: calc(${spacing.tiny} / 2) calc(${spacing.medium} / 1.5);
  border-radius: ${targetSize.normal};
  background-color: ${color.subtleHover};
  color: ${color.primary};
  min-height: ${spacing.medium};
  ${applyVariants(themeProps.tag)};
`

Tag.defaultProps = {
  className: null
}

Tag.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string
}
Tag.themeProps = themeProps
Tag.createVariants = componentCreateFactory(Tag)

export default Tag
