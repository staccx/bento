import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"
import { darken } from "polished"

export const CheckboxCheckedIcon = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color.white};
      height: 12px;
      width: 12px;
      left: 6px;
      top: 18px;
    `
  },
  CheckBox.themeProps.icon
)

export const CheckboxCheckedLabel = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      &::before {
        background-color: ${theming.color.primary};
        border-color: ${theming.color.primary};
      }
      &:hover,
      &:focus {
        &::before {
          border-color: ${p => darken(0.1, theming.color("primary")(p))};
        }
      }
    `
  },
  CheckBox.themeProps.labelChecked
)
