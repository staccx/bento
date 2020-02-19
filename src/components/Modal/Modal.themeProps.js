import { themePropTypes, createVariantsFunctionFactory } from "../../theming"

const themeProps = {
  dialog: {
    name: "modal_item",
    description: "",
    type: themePropTypes.style
  },
  content: {
    name: "modal_content",
    description: "",
    type: themePropTypes.style
  },
  close: {
    name: "modal_close",
    description: "",
    type: themePropTypes.style
  },
  backdrop: {
    name: "modal_backdrop",
    description: "",
    type: themePropTypes.style
  },
  closeIcon: {
    name: "COMPONENT_MODAL_CLOSE_ICON",
    description: "",
    type: themePropTypes.component
  }
}

export default createVariantsFunctionFactory(themeProps)
