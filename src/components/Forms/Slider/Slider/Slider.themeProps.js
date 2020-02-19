import {
  themePropTypes,
  createVariantsFunctionFactory
} from "../../../../theming"

const themeProps = {
  thumb: {
    name: "SLIDER_THUMB_STYLE",
    description: "Thumb style",
    type: themePropTypes.style
  },
  track: {
    name: "SLIDER_TRACK_STYLE",
    description: "Track style",
    type: themePropTypes.style
  },
  input: {
    name: "SLIDER_INPUT",
    description: "Input style",
    type: themePropTypes.style
  }
}

export default createVariantsFunctionFactory(themeProps)
