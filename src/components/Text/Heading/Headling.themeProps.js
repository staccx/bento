import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  heading: {
    name: "heading",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
