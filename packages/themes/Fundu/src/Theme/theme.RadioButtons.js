import { css } from "styled-components"
import { RadioButton, theming } from "@staccx/base"

export const RadioButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      &&&& ~ label::after {
        width: 12px;
        height: 12px;
        top: 2px;
        left: 6px;
      }
      &&&& ~ label::before {
        border: 1px solid ${theming.color.primary};
      }
      &&&&:focus ~ label::before {
        border: 2px solid ${theming.color.primary};
      }
    `
  },
  RadioButton.themeProps.radio
)
