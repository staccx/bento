import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT,
  color,
  targetSize
} from "@staccx/theme"
import { Button } from "@staccx/base"

export const ButtonStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      border-radius: ${targetSize.normal};
      background-color: ${color("b5")};
      &:hover,
      &:focus,
      &:active {
        background-color: ${color("text")};
      }
    `
  },
  Button.themeProps.button
)
