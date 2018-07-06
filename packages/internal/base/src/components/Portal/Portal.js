import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeComponent, spacing, color, themify } from "@staccx/theme"
import themePropTypes from "../constants/themePropTypes"

const Portal = ({ label, tagName, variant, className, ...rest }) => (
  <PortalWrapper className={className} {...rest} variant={variant}>
    <IconWrapper variant={variant}>
      <ThemeComponent tagName={tagName} />
    </IconWrapper>
    <Label variant={variant}>{label}</Label>
  </PortalWrapper>
)

Portal.themeProps = {
  label: {
    name: "PORTAL_LABEL",
    description: "Styling for the text-element (div)",
    type: themePropTypes.style
  },
  iconWrapper: {
    name: "PORTAL_ICON_WRAPPER",
    description: "Styling for the circle around the icon (div)",
    type: themePropTypes.style
  },
  icon: {
    name: "PORTAL_ICON",
    description: "Styling for the icon (svg)",
    type: themePropTypes.style
  },
  portalWrapper: {
    name: "PORTAL_Wrapper",
    description: "Styling for wrapper around the component (div)",
    type: themePropTypes.style
  }
}

const Label = styled.div`
  ${themify(Portal.themeProps.label)};
`

const IconWrapper = styled.div`
  border-radius: 50%;
  width: ${spacing("largePlus")};
  height: ${spacing("largePlus")};
  background-color: ${color.subtleHover};
  margin-bottom: ${spacing.tiny};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${themify(Portal.themeProps.iconWrapper)};
  svg {
    fill: ${color.primary};
    ${themify(Portal.themeProps.icon)};
  }
`

const PortalWrapper = styled.div`
  display: inline-block;
  text-align: center;
  color: currentColor;
  ${themify(Portal.themeProps.portalWrapper)};
`

Portal.defaultProps = {
  className: null
}

Portal.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  tagName: PropTypes.string,
  variant: PropTypes.string
}

export default Portal
