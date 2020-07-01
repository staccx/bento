import { themePropTypes } from "../../../constants/themeContants"

const selectThemeProps = {
  iconComponent: {
    name: "COMPONENT_SELECT_CARET_ICON",
    description: "Select icon",
    type: themePropTypes.component
  },
  closeComponent: {
    name: "COMPONENT_SELECT_CLOSE_ICON",
    description: "Close icon",
    type: themePropTypes.component
  },
  iconClose: {
    name: "COMPONENT_SELECT_CLOSE_ICON_STYLE",
    description: "Icon close style",
    type: themePropTypes.style
  },
  defaultOptionWrapper: {
    name: "SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER",
    description: "Default option wrapper style",
    type: themePropTypes.style
  },
  selectWrapper: {
    name: "SELECT_WRAPPER",
    description: "Icon close style",
    type: themePropTypes.style
  },
  selectedWrapper: {
    name: "SELECTED_WRAPPER",
    description: "Icon close style",
    type: themePropTypes.style
  },
  iconButton: {
    name: "SELECT_ICON_BUTTON",
    description: "Icon close style",
    type: themePropTypes.style
  },
  optionContainer: {
    name: "SELECT_DEFAULT_OPTION",
    description: "Select default Button-style",
    type: themePropTypes.style
  },
  helpButton: {
    name: "BUTTON_HELP",
    description: "Help button style",
    type: themePropTypes.style
  }
}

export default selectThemeProps
