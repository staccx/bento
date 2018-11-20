import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"

export const CheckBoxStyling = theming.createVariants(
  {
    iAmDisabled: css`
      label::before {
        display: none;
      }

      label {
        cursor: default;
      }

      label > svg {
        color: ${theming.color.disabled};
      }
    `
  },
  CheckBox.themeProps.wrapper
)
