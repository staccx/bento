import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  wrapper: {
    name: "checkbox",
    description: "Checkbox style",
    type: themePropTypes.style
  },
  icon: {
    name: "checkbox_checked_icon",
    description: "Icon style",
    type: themePropTypes.style
  },
  iconComponent: {
    name: "COMPONENT_CHECKBOX_ICON",
    description: "Icon component",
    type: themePropTypes.component
  },
  label: {
    name: "checkbox_label",
    description: "Label style",
    type: themePropTypes.style
  },
  labelBefore: {
    name: "CHECKBOX_LABEL_BEFORE",
    description: "Label before style",
    type: themePropTypes.style
  },
  labelChecked: {
    name: "CHECKBOX_LABEL_CHECKED",
    description: "Label checked style",
    type: themePropTypes.style
  },
  labelBeforeChecked: {
    name: "CHECKBOX_LABEL_BEFORE_CHECKED",
    description: "Label before checked style",
    type: themePropTypes.style
  },
  input: {
    name: "checkbox_input",
    description: "Inputstyle",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
