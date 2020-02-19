import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  anchor: {
    name: "Anchor",
    description: "HTML anchor link",
    type: themePropTypes.style
  }
}
export default createVariantsFunctionFactory(themeProps)
