import { css } from "styled-components"
import { CheckBox, theming } from "@staccx/base"

export const CheckBoxLabel = theming.createVariants(
  {
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
    iconBox: css`
      top: -7px;
      right: -7px;
      left: auto;
    `
  },
  CheckBox.themeProps.icon
)
