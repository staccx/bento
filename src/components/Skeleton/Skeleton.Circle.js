import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, spacing } from "../../theming"
import SkeletonPulse from "./Skeleton.Pulse"
import themeProps from "./Skeleton.Circle.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

/**
 * Skeleton is used as a placeholder and a illustrator that the page is loading components.
 * It is suppost to take the shape of the loading component and render a skeleton of that component,
 * also with a pulsing effect to illustrate loading.
 */
const SkeletonCircle = ({ className, width, height, ...restProps }) => {
  return (
    <Circle
      className={className}
      width={width}
      height={height}
      {...restProps}
    />
  )
}

export const SKELETONCIRCLE = "skeletoncircle"

export const Circle = styled(SkeletonPulse)`
  height: ${p => (p.height ? p.height : spacing.medium)};
  width: ${p => (p.width ? p.width : spacing.medium)};
  border-radius: 50%;
  max-width: ${p => (p.width ? p.width : spacing.medium)};

  &::before {
    content: "\\00a0";
  }

  ${applyVariants(themeProps.circle)};
`

SkeletonCircle.defaultProps = {
  className: null
}

SkeletonCircle.propTypes = {
  className: PropTypes.string
}
SkeletonCircle.themeProps = themeProps
SkeletonCircle.createVariants = componentCreateFactory(SkeletonCircle)

export default SkeletonCircle
