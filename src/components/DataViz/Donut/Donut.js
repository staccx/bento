import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color } from "../../../theming"
import themeProps from "./Donut.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const Donut = ({ variant, progress, className, warningThreshold, ...rest }) => {
  const dash = 57
  const dashoffset = dash * progress - dash
  return (
    <Wrapper
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      variant
      {...rest}
    >
      <title>{progress * 100}%</title>
      <g fill="none" fillRule="evenodd" strokeWidth="6">
        <Bg cx="12" cy="12" r="9" variant={variant} />
        <Value
          cx="12"
          cy="12"
          r="9"
          transform="rotate(-90 12 12)"
          dash={dash}
          dashoffset={dashoffset}
          progress={progress}
          warningThreshold={warningThreshold}
          variant={variant}
        />
      </g>
    </Wrapper>
  )
}

const Wrapper = styled.svg`
  transform: rotateY(180deg);
  ${applyVariants(themeProps.donut.name)};
`

const Bg = styled.circle`
  stroke: ${color.line};
  ${applyVariants(themeProps.donutBackground.name)};
`

const Value = styled.circle`
  stroke: ${p =>
    p.progress >= p.warningThreshold ? color.warning : color.primary};
  stroke-dasharray: ${p => p.dash};
  stroke-dashoffset: ${p => p.dashoffset};
  ${applyVariants(themeProps.donutValue.name)};
`

Donut.defaultProps = {
  progress: 0,
  className: "",
  warningThreshold: 0.9
}

Donut.propTypes = {
  /**
   * progress for the action range: 0-1
   */
  progress: PropTypes.number.isRequired,
  /**
   * Component gives a warning (changes color) at this threshold
   */
  warningThreshold: PropTypes.number,
  className: PropTypes.string
}
Donut.themeProps = themeProps
Donut.createVariants = componentCreateFactory(Donut)

export default Donut
