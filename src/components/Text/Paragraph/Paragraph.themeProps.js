import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  paragraph: {
    name: "paragraph",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
