import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, borderRadius } from "../../theming"
import SkeletonPulse from "./Skeleton.Pulse"
import themeProps from "./Skeleton.Line.themeProps"

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

export default SkeletonLine
