import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  line: {
    name: "line",
    description: "The skeleton line",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
