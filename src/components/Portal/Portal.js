import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themePropTypes } from "../../constants/themeContants"
import { spacing, color, applyVariants } from "../../theming"
import ThemeComponent from "../Theme/ThemeComponent"

const Portal = ({ label, tagName, variant, className, ...rest }) => (
  <PortalWrapper className={className} {...rest} variant={variant}>
    <IconWrapper variant={variant} {...rest}>
      <ThemeComponent tagName={tagName} />
    </IconWrapper>
    <Label variant={variant} {...rest}>
      {label}
    </Label>
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
  ${applyVariants(Portal.themeProps.label)};
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
  svg {
    fill: ${color.primary};
    ${applyVariants(Portal.themeProps.icon)};
  }
  ${applyVariants(Portal.themeProps.iconWrapper)};
`

const PortalWrapper = styled.div`
  display: inline-block;
  text-align: center;
  color: currentColor;
  ${applyVariants(Portal.themeProps.portalWrapper)};
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
