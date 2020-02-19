import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  list: {
    name: "PACK",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
