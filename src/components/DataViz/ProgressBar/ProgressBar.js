import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ScaleInX } from "../../../animations"
import { applyVariants, color, spacing, font } from "../../../theming"
import themeProps from "./ProgressBar.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const ProgressBar = ({
  progress,
  className,
  warningThreshold,
  ...otherProps
}) => {
  if (progress > 1) {
    console.warn("Progress is above max (1). Please enter correct value")
    progress *= 0.01
  }
  return (
    <Bg className={className} {...otherProps}>
      <Bar width={progress} warningThreshold={warningThreshold}>
        <Progress>
          {progress >= 1 ? "100" : Math.round(progress * 100)}%
        </Progress>
      </Bar>
    </Bg>
  )
}

const Bg = styled.div`
  background: ${color.subtleHover};
  display: block;
  height: ${spacing.medium};
  min-width: 200px;
  border-radius: ${spacing.small};
  position: relative;
  overflow: hidden;
  border: 3px solid ${color.subtleHover};
  -webkit-mask-image: -webkit-radial-gradient(
    white,
    black
  ); /* to remove transition-bug */

  ${applyVariants(themeProps.background.name)};
`

const Bar = styled.div`
  position: absolute;
  background-color: ${p =>
    p.width >= p.warningThreshold ? color.warning : color.primary};
  left: 0;
  height: 100%;
  width: ${p => (p.width > 1 ? "100" : p.width * 100)}%;
  border-radius: 0 ${spacing.small} ${spacing.small} 0;
  transform: scaleX(0);
  animation: ${ScaleInX} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s 1
    forwards;
  transform-origin: left center;
  ${applyVariants(themeProps.bar.name)};
`

const Progress = styled.span`
  position: absolute;
  right: ${spacing.small};
  line-height: 18px;
  font-size: ${font.tiny};
  color: ${color.white};
  ${applyVariants(themeProps.progress.name)};
`

ProgressBar.defaultProps = {
  className: "",
  warningThreshold: 0.9
}

ProgressBar.propTypes = {
  /**
   * Progress with rage from 0-1
   */
  progress: PropTypes.number.isRequired,
  /**
   * Warns the user when over threshold in range
   */
  warningThreshold: PropTypes.number,
  className: PropTypes.string
}

ProgressBar.themeProps = themeProps
ProgressBar.createVariants = componentCreateFactory(ProgressBar)

export default ProgressBar
