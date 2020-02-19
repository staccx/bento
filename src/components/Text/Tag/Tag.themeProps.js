import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  tag: {
    name: "tag",
    description: "A span with padding around it",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
