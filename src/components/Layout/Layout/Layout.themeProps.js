import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  container: {
    name: "LAYOUT",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
