import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  listItem: {
    name: "split_list",
    description: "",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
