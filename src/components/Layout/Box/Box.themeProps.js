import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  box: {
    name: "BOX",
    description: "Box style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
