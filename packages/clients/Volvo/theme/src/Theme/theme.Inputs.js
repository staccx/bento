import { css } from "styled-components"
import { registerStyle, spacing, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Input, fontSmoothing } from "@staccx/base"

const defaultStyling = css`
  border-width: 1px;
  border-color: ${color.line};
  ${fontSmoothing};
  &:hover,
  &:focus,
  &:active {
    border-color: ${color("primary")};
    background-color: ${color.white};
  }
`

export const InputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      ${defaultStyling};
    `,
    search: css`
      ${defaultStyling};
      padding-left: ${spacing.large};
    `,
    chat: css`
      height: ${spacing.large};
      padding-right: ${spacing("largePlus")};
      ${fontSmoothing};
      &:hover,
      &:focus,
      &:active {
        border-color: ${color("primary")};
        background-color: ${color.white};
      }
    `
  },
  Input.themeProps.input
)

export const InputWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      flex-grow: 1;
    `,
    chat: css`
      margin-left: -1px;
      margin-right: -1px;
    `
  },
  Input.themeProps.wrapper
)
