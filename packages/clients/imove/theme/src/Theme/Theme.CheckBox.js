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
      display: block;
      background-color: ${color.primary};
      color: ${color.white};
      text-align: center;
      padding: ${spacing.small};
    `
  },
  CheckBox.themeProps.label
)
