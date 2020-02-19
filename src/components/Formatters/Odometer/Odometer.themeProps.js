import { themePropTypes, createVariantsFunctionFactory } from "../../../theming"

const themeProps = {
  animating: {
    name: "odometer_animating",
    description: "Style for the animating odometer",
    type: themePropTypes.style
  },
  static: {
    name: "odometer_static",
    description: "Style for the static odometer",
    type: themePropTypes.style
  },
  container: {
    name: "odometer_container",
    description: "Style for the container",
    type: themePropTypes.style
  },
  wrapper: {
    name: "odometer_wrapper",
    description: "Style for the wrapper",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
