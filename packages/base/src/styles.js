// Styles

import ButtonStyle from "../src/components/Button/Button.styles"
import {
  SliderWrapperStyle,
  HiddenLabelStyle,
  SliderInputStyle
} from "../src/components/Forms/Slider/SliderKeyboardInput/SliderKeyboardInput.styles"
import SliderStyle from "../src/components/Forms/Slider/Slider/Slider.styles"
import {
  OdometerAnimatingStyle,
  OdometerStaticStyle,
  OdometerContainerStyle,
  OdometerWrapperStyle,
  DigitWrapperStyle,
  DigitContainerStyle
} from "../src/components/Formatters/Odometer/Odometer.styles"
import { CheckboxStyles } from "../src/components/Forms/CheckBox/Checkbox.styles"

const Styles = {
  button: ButtonStyle,
  sliderKeyboardInput: {
    sliderWrapper: SliderWrapperStyle,
    hiddenLabel: HiddenLabelStyle,
    sliderInput: SliderInputStyle
  },
  slider: SliderStyle,
  odometer: {
    odometerAnimating: OdometerAnimatingStyle,
    odometerStatic: OdometerStaticStyle,
    odometerContainer: OdometerContainerStyle,
    odometerWrapper: OdometerWrapperStyle,
    digitWrapper: DigitWrapperStyle,
    digitContainer: DigitContainerStyle
  },
  checkbox: {
    CheckboxStyles
  }
}

export default Styles
