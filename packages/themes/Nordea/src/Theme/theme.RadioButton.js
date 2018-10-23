import { css } from "styled-components"
import { RadioButton, theming } from "@staccx/base"

export const RadioButtonWrapper = theming.createVariants(
  {
    search: css`
      margin-right: ${theming.spacing.medium};
    `
  },
  RadioButton.themeProps.wrapper
)

export const RadioButtonLabel = theming.createVariants(
  {
    search: css`
      &::before {
        border-color: transparent;
      }
    `
  },
  RadioButton.themeProps.label
)
