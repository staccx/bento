import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  legend: {
    name: "LEGEND",
    description: "Legend style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
