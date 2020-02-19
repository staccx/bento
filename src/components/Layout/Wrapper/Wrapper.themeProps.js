import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  wrapper: {
    name: "WRAPPER",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
