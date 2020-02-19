import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  circle: {
    name: "circle",
    description: "The skeleton circle",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
