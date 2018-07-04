import { css } from "styled-components"
import { registerStyle, spacing, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Input, fontSmoothing } from "@staccx/base"

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
    `,
    chat: css`
      border-color: transparent;
      padding-right: ${spacing("largePlus")};
    `
  },
  Input.themeProps.input
)

export const InputWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      flex-grow: 1;
    `
  },
  Input.themeProps.wrapper
)
