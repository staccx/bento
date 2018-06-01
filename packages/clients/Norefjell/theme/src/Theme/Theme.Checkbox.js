import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { CheckBoxStyles } from "@staccx/base"
import { darken } from "polished"

export const CheckboxCheckedIcon = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color.white};
      height: 12px;
      width: 12px;
      left: 6px;
      top: 18px;
    `
  },
  CheckBoxStyles.CHECKBOX_CHECKED_ICON
)

export const CheckboxCheckedLabel = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      &::before {
        background-color: ${color.primary};
        border-color: ${color.primary};
      }
      &:hover,
      &:focus {
        &::before {
          border-color: ${p => darken(0.1, color("primary")(p))};
        }
      }
    `
  },
  CheckBoxStyles.CHECKBOX_LABEL_CHECKED
)
