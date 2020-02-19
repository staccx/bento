import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  radio: {
    name: "RADIO_BUTTON_RADIO",
    description: "Radio button style",
    type: themePropTypes.style
  },
  label: {
    name: "RADIO_BUTTON_LABEL",
    description: "Label style",
    type: themePropTypes.style
  },
  wrapper: {
    name: "RADIO_BUTTON_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
