import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
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

export default createVariantsFunctionFactory(themeProps)
