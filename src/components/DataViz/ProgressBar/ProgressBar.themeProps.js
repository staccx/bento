import { themePropTypes } from "../../../theming"

const themeProps = {
  background: {
    name: "progress_bar",
    description: "Progress bar background style",
    type: themePropTypes.style
  },
  bar: {
    name: "progress_bar_bar",
    description: "Progress bar bar style",
    type: themePropTypes.style
  },
  progress: {
    name: "progress_bar_progress",
    description: "Progress bar progress style",
    type: themePropTypes.style
  }
}
export default themeProps
