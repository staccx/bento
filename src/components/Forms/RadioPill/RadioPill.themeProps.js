import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  container: {
    name: "RADIO_PILL",
    description: "Container style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
