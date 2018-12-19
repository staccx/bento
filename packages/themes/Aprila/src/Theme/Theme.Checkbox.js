import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"
import { darken } from "polished"

export const CheckBoxWrapper = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``
  },
  CheckBox.themeProps.wrapper
)

export const CheckboxLabel = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      min-height: auto;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      display: flex;
      justify-content: left;
      align-items: center;

      &::before {
        position: static;
        border-width: 2px;
        border-radius: 3px;
        margin-right: 12px;
      }
      > svg {
        left: 8px;
        top: 8px;
      }
    `
  },
  CheckBox.themeProps.label
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
