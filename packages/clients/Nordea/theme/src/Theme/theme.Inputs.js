import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { InputStyles, fontSmoothing } from "@staccx/base"

export const InputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      border-width: 2px;
      border-color: transparent;
      ${fontSmoothing};
      &:hover,
      &:focus,
      &:active {
        border-color: ${color("b4")};
        background-color: ${color.white};
      }
    `
  },
  InputStyles.INPUT
)

export const InputWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      flex-grow: 1;
    `
  },
  InputStyles.INPUT_WRAPPER
)
