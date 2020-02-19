import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  label: {
    name: "LABEL",
    description: "Label style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
