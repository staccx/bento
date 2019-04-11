import { css } from "styled-components"
import { RadioButton, theming } from "@staccx/base"

export const RadioButtonWrapper = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: 0;
      min-height: 0;
    `,
    search: css`
      margin-right: ${theming.spacing.medium};
    `
  },
  RadioButton.themeProps.wrapper
)

export const RadioButtonLabel = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color.text};

      &::before {
        border: 0;
        background-color: ${theming.color.subtleHover};
      }

      &::after {
        height: 8px;
        width: 8px;
        top: 4px;
        left: 8px;
      }
    `,

    search: css`
      &::before {
        border-color: transparent;
      }
    `
  },
  RadioButton.themeProps.label
)

export const RadioButtonInput = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      &:checked ~ label {
        color: ${theming.color.primary};
      }
    `
  },
  RadioButton.themeProps.radio
)
