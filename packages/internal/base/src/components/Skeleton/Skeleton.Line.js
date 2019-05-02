import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themePropTypes } from "../../constants/themeContants"
import { applyVariants } from "../../theming"
import SkeletonPulse from "./Skeleton.Pulse"

const SkeletonLine = ({ className, width, ...restProps }) => {
  return (
    <Line className={className} width={width} {...restProps}>
      {"\u00A0"}
    </Line>
  )
}

SkeletonLine.themeProps = {
  line: {
    name: "line",
    description: "The skeleton line",
    type: themePropTypes.style
  }
}

export const SKELETONLINE = "skeletonline"

export const Span = styled.span`
  ${applyVariants(SkeletonLine.themeProps.pulse)};
`

export const Line = styled(SkeletonPulse)`
  height: 1em;
  width: ${p => (p.width ? p.width : "5.5em")};
  max-width: ${p => (p.width ? p.width : "none")};
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }

  ${applyVariants(SkeletonLine.themeProps.line)};
`

SkeletonLine.defaultProps = {
  className: null
}

SkeletonLine.propTypes = {
  className: PropTypes.string
}

export default SkeletonLine
