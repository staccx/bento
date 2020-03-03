import { themePropTypes } from "../../theming"

const themeProps = {
  iconComponent: {
    name: "COMPONENT_EXPAND_ICON",
    description: "Icon shown. Defaults to Caret",
    type: themePropTypes.component
  },
  icon: {
    name: "EXPAND_ICON",
    description: "Icon style",
    type: themePropTypes.style
  },
  wrapper: {
    name: "EXPAND_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  button: {
    name: "EXPAND_BTN",
    description: "Button style",
    type: themePropTypes.style
  },
  item: {
    name: "EXPAND_ITEM",
    description: "Item style",
    type: themePropTypes.style
  }
}

export default themeProps
