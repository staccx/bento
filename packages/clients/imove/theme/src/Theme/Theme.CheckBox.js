import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT,
  font,
  color,
  fontWeight,
  fontFamily,
  spacing
} from "@staccx/theme"
import { CheckBox } from "@staccx/base"
import { opacity } from "@staccx/color"

export const CheckBoxLabel = registerStyle(
  {
    iconBox: css`
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-grow: 1;
      min-height: 89px;
      display: block;
      background-color: ${color.primary};
      color: ${color.white};
      text-align: center;
      padding: ${spacing.small};

      svg {
        display: block;
        flex-basis: 100%;
        margin: 0 auto ${spacing.small};
      }
    `
  },
  CheckBox.themeProps.label
)

export const CheckBoxCheckContainer = registerStyle(
  {
    iconBox: css`
      top: -9px;
      right: -9px;
      left: auto;
      border-radius: 50%;
      border: 4px solid ${color("primaryLight")} !important;
    `
  },
  CheckBox.themeProps.labelBefore
)

export const CheckBoxCheck = registerStyle(
  {
    iconBox: css`
      top: -7px;
      right: -7px;
      left: auto;
    `
  },
  CheckBox.themeProps.icon
)
