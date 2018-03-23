// Styles

import ButtonStyle from "../src/components/Button/Button.styles"
import SliderKeyboardInputStyles from "../src/components/Forms/Slider/SliderKeyboardInput/SliderKeyboardInput.styles"
import SliderStyle from "../src/components/Forms/Slider/Slider/Slider.styles"
import OdometerStyles from "../src/components/Formatters/Odometer/Odometer.styles"
import CheckboxStyles from "../src/components/Forms/CheckBox/Checkbox.styles"

const Styles = {
  button: ButtonStyle,
  SliderKeyboardInput: {
    ...SliderKeyboardInputStyles
  },
  slider: SliderStyle,
  Odometer: {
    ...OdometerStyles
  },
  Checkbox: {
    ...CheckboxStyles
  }
}

export default Styles
