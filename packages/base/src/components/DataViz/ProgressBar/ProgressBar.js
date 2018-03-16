import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ScaleInX } from "@staccx/animations"

const ProgressBar = ({ progress, className, ...otherProps }) => (
  <Bg className={className} {...otherProps}>
    <Bar width={progress}>
      <Progress>{progress >= 100 ? "100" : progress}%</Progress>
    </Bar>
  </Bg>
)

const Bg = styled.div`
  background: ${p => p.theme.color.subtleHover};
  display: block;
  height: ${p => p.theme.spacing.medium};
  border-radius: ${p => p.theme.spacing.small};
  position: relative;
  overflow: hidden;
  border: 3px solid ${p => p.theme.color.subtleHover};
  -webkit-mask-image: -webkit-radial-gradient(
    white,
    black
  ); /* to remove transition-bug */
`

const Bar = styled.div`
  position: absolute;
  background-color: ${p =>
    p.width >= 90 ? p.theme.color.warning : p.theme.color.primary};
  left: 0;
  height: 100%;
  width: ${p => (p.width > 100 ? "100" : p.width)}%;
  border-radius: 0 ${p => p.theme.spacing.small} ${p => p.theme.spacing.small} 0;
  transform: scaleX(0);
  animation: ${ScaleInX} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s 1
    forwards;
  transform-origin: left center;
`

const Progress = styled.span`
  position: absolute;
  right: ${p => p.theme.spacing.small};
  line-height: 18px;
  font-size: ${p => p.theme.font.size.tiny};
  color: ${p => p.theme.color.white};
`

ProgressBar.defaultProps = {
  className: ""
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default ProgressBar
