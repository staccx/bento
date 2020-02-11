import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import fontSmoothing from "../../theming/styles/fontsmoothing"
import { color, fontWeight, applyVariants } from "../../theming"
import { commonPropTypes, themePropTypes } from "../../constants/themeContants"

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

NewBadge.themeProps = {
  wrapper: {
    name: "NEW_BADGE_WRAPPER",
    description: "",
    type: themePropTypes.style
  },
  badge: {
    name: "NEW_BADGE_BADGE",
    description: "",
    type: themePropTypes.style
  }
}

const NewBadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
  ${applyVariants(NewBadge.themeProps.wrapper)};
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
  ${applyVariants(NewBadge.themeProps.badge)};
`

NewBadge.propTypes = {
  /**
   * Number will be displayed on the badge
   */
  number: PropTypes.number.isRequired,
  children: commonPropTypes.children
}

export default NewBadge
