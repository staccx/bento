import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import loglevel from "loglevel"
import Flag from "../Layout/Flag/Flag"
import Warning from "../Icons/Warning"
import Success from "../Icons/Success"
import Info from "../Icons/Info/Info"
import { color, applyVariants, borderRadius, spacing } from "../../theming"
import { themePropTypes, commonPropTypes } from "../../constants/themeContants"
import ThemeComponent from "../Theme/ThemeComponent"

const tProps = {
  alert: {
    name: "ALERT",
    description: "Alert style",
    type: themePropTypes.style
  },
  componentAlertInfo: {
    name: "COMPONENT_ALERT_INFO",
    description: "Theme component for info alert",
    type: themePropTypes.component
  },
  componentAlertWarning: {
    name: "COMPONENT_ALERT_WARNING",
    description: "Theme component for warning alert",
    type: themePropTypes.component
  },
  componentAlertSuccess: {
    name: "COMPONENT_ALERT_SUCCESS",
    description: "Theme component for success alert",
    type: themePropTypes.component
  },
  alertInfo: {
    name: "ALERT_INFO",
    description: "Styles for info alert",
    type: themePropTypes.style
  },
  alertWarning: {
    name: "ALERT_WARNING",
    description: "Styles for warning alert",
    type: themePropTypes.style
  },
  alertSuccess: {
    name: "ALERT_SUCCESS",
    description: "Styles for success alert",
    type: themePropTypes.style
  }
}

const Icon = ({ type, props }) => {
  switch (type) {
    case "info":
      return (
        <ThemeComponent
          tagName={tProps.componentAlertInfo}
          fallback={Info}
          {...props}
        />
      )
    case "warning":
      return (
        <ThemeComponent
          tagName={tProps.componentAlertWarning}
          fallback={Warning}
          {...props}
        />
      )
    case "success":
      return (
        <ThemeComponent
          tagName={tProps.componentAlertSuccess}
          fallback={Success}
          {...props}
        />
      )
    default:
      return null
  }
}

const colors = ({ type }) => {
  switch (type) {
    case "warning":
      return css`
        background-color: ${color("warning")};
        color: ${color("white")};
        ${applyVariants(tProps.alertWarning)};
      `
    case "success":
      return css`
        background-color: ${color("positive")};
        color: ${color("white")};
        ${applyVariants(tProps.alertSuccess)};
      `
    case "info":
    default:
      return css`
        background-color: ${color("line")};
        color: ${color("text")};
        ${applyVariants(tProps.alertInfo)};
      `
  }
}

const Alert = ({ children, type, ...restProps }) => {
  if (!children) {
    // TODO: What do we do here
    loglevel.warn("No children defined")
    return null
  }
  return (
    <AlertElement type={type} role="alert" {...restProps}>
      <Flag small img={<Icon type={type} />}>
        {children}
      </Flag>
    </AlertElement>
  )
}

const AlertElement = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
  padding: ${spacing.small};
  ${colors};
  ${applyVariants(tProps.alert)};
`

Alert.propTypes = {
  /**
   * Component or text to render inside the alert
   */
  children: commonPropTypes.children.isRequired,
  /**
   * Alert type
   * @export
   */
  type: PropTypes.oneOf(["warning", "success", "info"])
}

Alert.defaultProps = {
  type: "info",
  children: null
}

Alert.themeProps = tProps

export default Alert
