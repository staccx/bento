import { css } from "styled-components"
import { registerStyle, spacing } from "@staccx/theme"
import { RadioButton } from "@staccx/base"

export const RadioButtonWrapper = registerStyle(
  {
    search: css`
      margin-right: ${spacing.medium};
    `
  },
  RadioButton.themeProps.wrapper
)

export const RadioButtonLabel = registerStyle(
  {
    search: css`
      &::before {
        border-color: transparent;
      }
    `
  },
  RadioButton.themeProps.label
)
