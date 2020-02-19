import {
  themePropTypes,
  createVariantsFunctionFactory
} from "../../../../theming"

const themeProps = {
  wrapper: {
    name: "FileInput_Wrapper",
    description: "FileInput wrapper style",
    type: themePropTypes.style
  },
  input: {
    name: "FileInput_Input",
    description: "Input style – default is hidden! Style the label instead.",
    type: themePropTypes.style
  },
  label: {
    name: "FileInput_Label",
    description: "Label style",
    type: themePropTypes.style
  },
  icon: {
    name: "FileInput_Icon_Style",
    description: "Icon style",
    type: themePropTypes.style
  },
  iconComponent: {
    name: "FileInput_Icon_Component",
    description: "Icon component",
    type: themePropTypes.component
  }
}

export default createVariantsFunctionFactory(themeProps)
