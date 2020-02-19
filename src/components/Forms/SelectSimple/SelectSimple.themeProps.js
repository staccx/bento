import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  iconComponent: {
    name: "COMPONENT_SELECT_SIMPLE_ICON",
    description: "Icon component",
    type: themePropTypes.component
  },
  wrapper: {
    name: "SELECT_SIMPLE_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  icon: {
    name: "SELECT_SIMPLE_ICON",
    description: "Icon style",
    type: themePropTypes.style
  },
  select: {
    name: "SELECT_SIMPLE_SELECT",
    description: "Icon style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
