import { Styles } from "../index"

const theme = {
  name: "Default theme",
  globals: {
    spacing: {
      huge: "96px",
      large: "48px",
      mediumPlus: "32px",
      medium: "24px",
      small: "12px",
      tiny: "6px",
      micro: "3px"
    },
    wrapper: {
      small: "420px",
      medium: "640px",
      large: "1024px",
      breakout: "640px"
    },
    color: {
      white: "#fff",
      bg: "#fff",
      subtleHover: "#F7F7FF",
      bgGray: "#f7f7ff",
      line: "#EBEBF2",
      gray: "#767676",
      wcag: "#777",
      disabled: "#BABABA",
      primary: "#00a190",
      secondary: "#F5A623",
      text: "#2b2b2b",
      negative: "#ea526f",
      positive: "#4A90E2",
      warning: "#c54059",
      black: "#000",
      green: "#00a190" // for toggle eks
    },
    font: {
      size: {
        h1: "36px",
        h2: "26px",
        h3: "22px",
        h4: "18px",
        h5: "16px",
        h6: "14px",
        base: "14px",
        tiny: "12px",
        input: "16px",
        huge: "44px"
      },
      heading: "sans-serif",
      body: "sans-serif"
    },
    targetSize: {
      small: "36px",
      normal: "44px"
    },
    borderRadius: "2px"
  },
  Button: {
    base: {
      style: Styles.button
    }
  },
  Slider: {
    base: {
      style: Styles.slider
    }
  },
  SliderKeyboardInput: {
    base: {},
    SliderWrapper: {
      base: {
        style: Styles.SliderKeyboardInput.SliderWrapper
      }
    },
    HiddenLabel: {
      base: {
        style: Styles.SliderKeyboardInput.HiddenLabel
      }
    },
    SliderInput: {
      base: {
        style: Styles.SliderKeyboardInput.SliderInput
      }
    }
  },
  Odometer: {
    base: {},
    OdometerAnimating: {
      base: {
        style: Styles.Odometer.OdometerAnimating
      }
    },
    OdometerStatic: {
      base: {
        style: Styles.Odometer.OdometerStatic
      }
    },
    OdometerContainer: {
      base: {
        style: Styles.Odometer.OdometerContainer
      }
    },
    OdometerWrapper: {
      base: {
        style: Styles.Odometer.OdometerWrapper
      }
    },
    DigitWrapper: {
      base: {
        style: Styles.Odometer.DigitWrapper
      }
    },
    DigitContainer: {
      base: {
        style: Styles.Odometer.DigitContainer
      }
    }
  },
  CheckBox: {
    base: {},
    CheckWrapper: {
      base: {
        style: Styles.Checkbox.CheckWrapper
      }
    },
    IconCheck: {
      base: {
        style: Styles.Checkbox.IconCheck
      }
    },
    InputCheck: {
      base: {
        style: Styles.Checkbox.InputCheck
      }
    },
    Label: {
      base: {
        style: Styles.Checkbox.Label
      }
    }
  }
}

console.log(theme)

export default theme
