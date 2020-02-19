import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  label: {
    name: "RADIO_PILL_ITEM_LABEL",
    description: "Label style",
    type: themePropTypes.style
  },
  checked: {
    name: "RADIO_PILL_ITEM_CHECKED",
    description: "Checked style",
    type: themePropTypes.style
  },
  wrapper: {
    name: "RADIO_PILL_ITEM_WRAPPER",
    description: "Checked style",
    type: themePropTypes.style
  },
  hover: {
    name: "RADIO_PILL_ITEM_HOVER",
    description: "Checked style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
