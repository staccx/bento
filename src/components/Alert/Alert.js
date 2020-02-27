import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import loglevel from "loglevel"
import Flag from "../Layout/Flag/Flag"
import Warning from "../Icons/Warning/Warning"
import Success from "../Icons/Success/Success"
import Info from "../Icons/Info/Info"
import {
  color,
  applyVariants,
  borderRadius,
  spacing,
  commonPropTypes
} from "../../theming"
import ThemeComponent from "../Theme/ThemeComponent"
import themeProps from "./Alert.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

const Icon = ({ type, props }) => {
  switch (type) {
    case "info":
      return (
        <ThemeComponent
          tagName={themeProps.componentAlertInfo}
          fallback={Info}
          {...props}
        />
      )
    case "warning":
      return (
        <ThemeComponent
          tagName={themeProps.componentAlertWarning}
          fallback={Warning}
          {...props}
        />
      )
    case "success":
      return (
        <ThemeComponent
          tagName={themeProps.componentAlertSuccess}
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
        ${applyVariants(themeProps.alertWarning)};
      `
    case "success":
      return css`
        background-color: ${color("positive")};
        color: ${color("white")};
        ${applyVariants(themeProps.alertSuccess)};
      `
    case "info":
    default:
      return css`
        background-color: ${color("line")};
        color: ${color("text")};
        ${applyVariants(themeProps.alertInfo)};
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
  ${applyVariants(themeProps.alert)};
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

Alert.themeProps = themeProps
Alert.createVariants = componentCreateFactory(Alert)

export default Alert
