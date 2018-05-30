import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { color, fontWeight, themify, themeProps } from "@staccx/theme"
import fontSmoothing from "../../Styles/fontsmoothing"

const NewBadge = ({ number, children }) => (
  <NewBadgeWrapper>
    {children}
    {number > 0 && (
      <Badge number={number}>
        <span>{number}</span>
      </Badge>
    )}
  </NewBadgeWrapper>
)

export const NEW_BADGE_WRAPPER = "NEW_BADGE_WRAPPER"
const NewBadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
  ${themify(NEW_BADGE_WRAPPER)};
`

export const NEW_BADGE_BADGE = "NEW_BADGE_BADGE"
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
  ${themify(NEW_BADGE_BADGE)};
`

NewBadge.propTypes = {
  number: PropTypes.number.isRequired,
  children: themeProps.children
}

export default NewBadge
