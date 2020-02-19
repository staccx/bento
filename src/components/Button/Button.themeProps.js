import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  button: {
    name: "Button",
    description: "Button styles",
    type: themePropTypes.style
  }
}
export default createVariantsFunctionFactory(themeProps)
