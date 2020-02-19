import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  text: {
    name: "text",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
