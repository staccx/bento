import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, borderRadius } from "../../theming"
import SkeletonPulse from "./Skeleton.Pulse"
import themeProps from "./Skeleton.Line.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

/**
 *  Skeleton is used as a placeholder and a illustrator that the page is loading components.
 *  It is suppost to take the shape of the loading component and render a skeleton of that component,
 *  also with a pulsing effect to illustrate loading.
 */

const SkeletonLine = ({ className, width, height, ...restProps }) => {
  return (
    <Line className={className} width={width} height={height} {...restProps} />
  )
}

export const SKELETONLINE = "skeletonline"

export const Line = styled(SkeletonPulse)`
  height: ${p => (p.height ? p.height : "1em")};
  width: ${p => (p.width ? p.width : "5.5em")};
  max-width: ${p => (p.width ? p.width : "none")};
  border-radius: ${borderRadius};

  &::before {
    content: "\\00a0";
  }

  ${applyVariants(themeProps.line)};
`

SkeletonLine.defaultProps = {
  className: null
}

SkeletonLine.propTypes = {
  className: PropTypes.string
}
SkeletonLine.themeProps = themeProps
SkeletonLine.createVariants = componentCreateFactory(SkeletonLine)

export default SkeletonLine
