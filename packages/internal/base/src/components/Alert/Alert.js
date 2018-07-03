import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Flag from "../Layout/Flag/Flag"
import Warning from "../Icons/Warning"
import Success from "../Icons/Success"
import Info from "../Icons/Info"
import {
  spacing,
  themify,
  ThemeComponent,
  color,
  borderRadius,
  themeProps
} from "@staccx/theme"
import themePropTypes from "../constants/themePropTypes"

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
        ${themify(tProps.alertWarning)};
      `
    case "success":
      return css`
        background-color: ${color("positive")};
        color: ${color("white")};
        ${themify(tProps.alertSuccess)};
      `
    case "info":
    default:
      return css`
        background-color: ${color("line")};
        color: ${color("text")};
        ${themify(tProps.alertInfo)};
      `
  }
}

const Alert = ({ children, type, ...restProps }) => {
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
  ${themify(tProps.alert)};
`

Alert.propTypes = {
  children: themeProps.children.isRequired,
  type: PropTypes.oneOf(["warning", "success", "info"])
}

Alert.defaultProps = {
  type: "info"
}

Alert.themeProps = tProps

export default Alert
