import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  wrapper: {
    name: "NEW_BADGE_WRAPPER",
    description: "",
    type: themePropTypes.style
  },
  badge: {
    name: "NEW_BADGE_BADGE",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
