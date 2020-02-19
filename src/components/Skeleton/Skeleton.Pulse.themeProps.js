import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  pulse: {
    name: "pulse",
    description: "The pulse animation",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
