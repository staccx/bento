import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { color, fontWeight, themify, themeProps } from "@staccx/theme"
import fontSmoothing from "../../Styles/fontsmoothing"
import themePropTypes from "../constants/themePropTypes"

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
  ${themify(NewBadge.themeProps.wrapper)};
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
  ${themify(NewBadge.themeProps.badge)};
`

NewBadge.propTypes = {
  number: PropTypes.number.isRequired,
  children: themeProps.children
}

export default NewBadge
