import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"

export const CheckBoxLabel = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding-left: 51px;
    `,
    iconBox: css`
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-grow: 1;
      min-height: 89px;
      display: block;
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      text-align: center;
      padding: ${theming.spacing.small};

      svg {
        display: block;
        flex-basis: 100%;
        margin: 0 auto ${theming.spacing.small};
      }
    `
  },
  CheckBox.themeProps.label
)

export const CheckBoxCheckContainer = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 28px;
      height: 28px;
      top: 8px;
      border-width: 2px;
      border-color: ${theming.color.primary}4d;
      border-radius: 50% 50% 0;
    `,
    iconBox: css`
      top: -9px;
      right: -9px;
      left: auto;
      border-radius: 50%;
      border: 4px solid ${theming.color("primaryLight")} !important;
    `
  },
  CheckBox.themeProps.labelBefore
)

export const CheckBoxCheck = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      fill: ${theming.color.white};
      width: 10px;
      left: 9px;
      top: 14px;
    `,
    iconBox: css`
      top: -7px;
      right: -7px;
      left: auto;
    `
  },
  CheckBox.themeProps.icon
)

export const CheckBoxChecked = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      &:checked ~ label::before {
        background-color: ${theming.color.primary};
      }
    `
  },
  CheckBox.themeProps.input
)
