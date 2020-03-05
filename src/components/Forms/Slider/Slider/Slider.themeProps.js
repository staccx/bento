import { themePropTypes } from "../../../../theming"

const themeProps = {
  container: {
    name: "Slider_CONTAINER",
    description: "Container style",
    type: themePropTypes.style
  },
  slider: {
    name: "Slider_SLIDER",
    description: "Slider outer style",
    type: themePropTypes.style
  },
  rail: {
    name: "Slider_RAIL",
    description: "Rail style",
    type: themePropTypes.style
  },
  tracks: {
    name: "Slider_TRACKS",
    description: "Tracks style",
    type: themePropTypes.style
  },
  handle: {
    name: "Slider_HANDLE",
    description: "Handle style",
    type: themePropTypes.style
  }
}

export default themeProps
