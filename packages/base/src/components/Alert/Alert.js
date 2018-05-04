import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Flag from "../Layout/Flag/Flag"
import Caret from "../Icons/Caret"
import { spacing, themify, ThemeComponent, color } from "@staccx/theme"

export const COMPONENT_ALERT_INFO = "COMPONENT_ALERT_INFO"
export const COMPONENT_ALERT_WARNING = "COMPONENT_ALERT_WARNING"
export const COMPONENT_ALERT_SUCCESS = "COMPONENT_SUCCESS"

const Icon = ({ type, props }) => {
  switch (type) {
    case "info":
      return (
        <ThemeComponent
          tagName={COMPONENT_ALERT_INFO}
          fallback={Caret}
          {...props}
        />
      )
    case "warning":
      return (
        <ThemeComponent
          tagName={COMPONENT_ALERT_WARNING}
          fallback={Caret}
          {...props}
        />
      )
    case "success":
      return (
        <ThemeComponent
          tagName={COMPONENT_ALERT_SUCCESS}
          fallback={Caret}
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
      `
    case "success":
      return css`
        background-color: ${color("positive")};
        color: ${color("white")};
      `
    case "info":
    default:
      return css`
        background-color: ${color("line")};
        color: ${color("text")};
      `
  }
}

const Alert = ({ children, type }) => {
  return (
    <AlertElement type={type} role="alert">
      <Flag img={<Icon type={type} />}>{children}</Flag>
    </AlertElement>
  )
}

export const ALERT = "ALERT"
const AlertElement = styled.div`
  width: 100%;
  border-radius: 3px;
  padding: ${spacing.small};
  ${colors};
  ${themify(ALERT)};
`

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  type: PropTypes.oneOf(["warning", "success", "info"])
}

Alert.defaultProps = {
  spacing: "tiny"
}

export default Alert
