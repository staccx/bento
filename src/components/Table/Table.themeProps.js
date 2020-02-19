import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  table: {
    name: "base-component-table",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
