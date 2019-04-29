import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"

export const CheckBoxLabelStyling = theming.createVariants(
  {
    filter: css`
      padding-top: 0;
      padding-bottom: 0;
      min-height: 0;

      &::before {
        top: 0;
      }
    `
  },
  CheckBox.themeProps.label
)
