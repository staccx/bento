import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import fontSmoothing from "../../theming/styles/fontsmoothing"
import {
  color,
  fontWeight,
  applyVariants,
  commonPropTypes
} from "../../theming"
import themeProps from "./NewBadge.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

const NewBadge = ({ number, children, variant }) => (
  <NewBadgeWrapper variant={variant}>
    {children}
    {number > 0 && (
      <Badge number={number} variant={variant}>
        <span>{number}</span>
      </Badge>
    )}
  </NewBadgeWrapper>
)

const NewBadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
  ${applyVariants(themeProps.wrapper)};
`

const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  line-height: 1;
  background: ${color.warning};
  border-radius: 50%;
  text-align: center;
  color: ${color.white};
  font-size: ${p => (p.number < 99 ? "12px" : "10px")};
  font-weight: ${fontWeight.bold};
  right: -12px;
  bottom: -12px;
  position: absolute;
  ${fontSmoothing};
  ${applyVariants(themeProps.badge)};
`

NewBadge.propTypes = {
  /**
   * Number will be displayed on the badge
   */
  number: PropTypes.number.isRequired,
  children: commonPropTypes.children
}
NewBadge.themeProps = themeProps
NewBadge.createVariants = componentCreateFactory(NewBadge)

export default NewBadge
