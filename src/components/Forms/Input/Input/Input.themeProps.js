import { themePropTypes } from "../../../../theming"

const themeProps = {
  iconComponent: {
    name: "INPUT_HELP_ICON_COMPONENT",
    description: "Icon shown. Defaults to Caret",
    type: themePropTypes.component
  },
  icon: {
    name: "INPUT_HELP_ICON_STYLE",
    description: "Icon style",
    type: themePropTypes.style
  },
  input: {
    name: "INPUT",
    description: "Input style",
    type: themePropTypes.style
  },
  wrapper: {
    name: "INPUT_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  label: {
    name: "INPUT_LABEL",
    description: "Label style",
    type: themePropTypes.style
  },
  helpText: {
    name: "INPUT_HELPTEXT",
    description: "Helptext style",
    type: themePropTypes.style
  },
  helpButton: {
    name: "BUTTON_HELP",
    description: "Help button style",
    type: themePropTypes.style
  }
}

export default themeProps
