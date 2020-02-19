import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  rule: {
    name: "divider",
    description: "horizontal line style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
