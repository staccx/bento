import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  listItem: {
    name: "INLINE_LIST_ITEM",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
